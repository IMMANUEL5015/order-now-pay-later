import order from './order.service';
import {create_schema} from './order.validator';

export async function create(request: any, reply: any) {
    if (!request.user || request.user.role !== 'department') {
        throw new Error('You are not allowed to perform this action.');
    }

    const value = await create_schema.validateAsync(request.body);
    const reference: string = await order.create(
        {...value, department_id: request.user.id},
        request
    );
    
    reply.code(201).send({
        status: 'Success', message: 'Order Placed Successfully',
        data: {transaction_reference: reference}
    });
}

export async function update(request: any, reply: any) {
    if (!request.user || request.user.role !== 'department') {
        throw new Error('You are not allowed to perform this action.');
    }

    await order.update(
        {
            reference: request.params.reference, 
            department_id: request.user.id
        }
    );
    
    reply.code(200).send({
        status: 'Success', message: 'Payment Successful'
    });
}