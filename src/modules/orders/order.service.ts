import db from "../db";
import { create, update, transaction } from './order.dto';
import Transaction from '../../mongodb/models/transactions';
import uniqueString from "../../utilities/unique-string";
import prevent_replay_attack from '../../utilities/prevent-replay-attack';

const order = {
    create: async (data: create, request: any) => {
        await prevent_replay_attack(request);

        const reference = uniqueString();

        const department = await db.department.findFirst({
            where: {id: data.department_id}
        });
        
        const new_transaction: transaction = await Transaction.create({
            amount: data.amount, 
            business_id: department?.business_id,
            reference, 
            status: data.pay_now ? 'paid' : 'unpaid'                 
        });

        const result = await db.order.create({
            data: {
                amount: data.amount,            
                department_id: data.department_id,     
                transaction_id: String(new_transaction._id),          
                item: data.item,  
                paid_tax: false,         
                quantity: data.quantity  
            }
        });
        
        await Transaction.findByIdAndUpdate(
            new_transaction._id,
            {order_id: result.id, updated_at: Date.now()},
            {new: true},
        )

        return reference;
    },

    update: async (data: update) => {
        const department = await db.department.findFirst({
            where: {id: data.department_id}
        });

        const found_transaction = await Transaction.findOne({
            reference: data.reference,
            business_id: department?.business_id
        });

        if (!found_transaction) {
            throw new Error('Transaction with reference does not exist for your department');
        }

        if (found_transaction.status === 'paid') {
            throw new Error('Payment has already been made for this transaction');
        }

        await Transaction.findByIdAndUpdate(
            found_transaction._id,
            {status: 'paid', updated_at: Date.now()},
            {new: true},
        )
    }
};

export default order