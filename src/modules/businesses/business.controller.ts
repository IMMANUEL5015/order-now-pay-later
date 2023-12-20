import business from './business.service';
import {create_schema, login_schema} from './business.validator';

export async function create(request: any, reply: any) {
    const value = await create_schema.validateAsync(request.body);
    await business.create(value);
    reply.code(201).send({
        status: 'Success', message: 'Business Account Created Successfully'
    });
}

export async function login(request: any, reply: any) {
    const value = await login_schema.validateAsync(request.body);
    const result = await business.login(value);
    reply.code(200).send({
        status: 'Success', 
        message: 'Logged In Successfully',
        data: result
    });
}

export async function get_credit_score(request: any, reply: any) {
    if (!request.user || request.user.role !== 'business') {
        throw new Error('You are not allowed to perform this action.');
    }
    const credit_score = await business.get_credit_score(request);
    reply.code(200).send({
        status: 'Success', 
        message: 'Successful',
        data: {credit_score}
    });
}

export async function get_order_details(request: any, reply: any) {
    if (!request.user || request.user.role !== 'business') {
        throw new Error('You are not allowed to perform this action.');
    }
    const order_details = await business.get_order_details(request);
    reply.code(200).send({
        status: 'Success', 
        message: 'Successful',
        data: {order_details}
    });
}