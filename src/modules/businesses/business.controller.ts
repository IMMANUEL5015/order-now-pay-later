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