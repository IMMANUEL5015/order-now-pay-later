import { compare, hash, sign } from "../../utilities/auth";
import db from "../db";
import { create } from "./business.dto";

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
                credit_score: 0
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
    }
};

export default business