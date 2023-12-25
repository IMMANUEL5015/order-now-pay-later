import Transaction from "../../mongodb/models/transactions";
import { compare, hash, sign } from "../../utilities/auth";
import db from "../db";
import { create } from "./business.dto";
import {endOfDay} from 'date-fns/endOfDay'
import {startOfDay} from 'date-fns/startOfDay'

const business = {
    create: async (data: create) => {
        const exists = await db.business.findFirst({
            where: {
                OR: [
                    {name: data.name,}, {email: data.email,},
                ],
            },
        });

        if (exists) {
            throw new Error('Business name or email already exists.');
        }

        const hashed = await hash(data.password);
        const result = await db.business.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashed,
                // credit_score: 0
            }
        });
        
        return result;
    },

    login: async (data: create) => {
        const business = await db.business.findFirst({
            where: {email: data.email},
        });

        if (!business) {
            throw new Error('Business email or password does not exist.');
        }

        const match = await compare(data.password, business.password);
        if (!match) {
            throw new Error('Business email or password does not exist.');
        }

        const token = await sign({
            email: business.email,
            id: business.id,
            name: business.name,
            role: 'business'
        });

        return token;
    },

    get_credit_score: async (request: any) => {
        const num_of_transactions = await Transaction.countDocuments({
            business_id: request.user.id,
            status: 'paid'
        });

        const percentage = (num_of_transactions * 100);

        const transactions = await Transaction.find({
            business_id: request.user.id,
            status: 'paid'
        }).select('amount').lean();

        const total = transactions.reduce((prev, curr) => prev + curr.amount, 0);

        const credit_score = total / percentage;

        return credit_score;
    },

    get_order_details: async (request: any) => {
        const result = {
            number_of_orders: 0,
            number_of_orders_today: 0,
            amount_of_orders: 0,
            amount_of_orders_today: 0
        };

        const transactions = await Transaction.find({
            business_id: request.user.id,
        }).select('amount').lean();

        const total = transactions.reduce((prev, curr) => prev + curr.amount, 0);

        const transactions_today = await Transaction.find({
            created_at: {
              $gte: startOfDay(new Date()),
              $lte: endOfDay(new Date())
            }
          }).select('amount').lean();
        const total_today = transactions_today.reduce((prev, curr) => prev + curr.amount, 0);

        result.amount_of_orders = total;
        result.number_of_orders = transactions.length;

        result.amount_of_orders_today = total_today;
        result.number_of_orders_today = transactions_today.length;

        return result;
    },
};

export default business