import department from './department.service';
import {create_schema, login_schema} from './department.validator';

export async function create(request: any, reply: any) {
    if (!request.user || request.user.role !== 'business') {
        throw new Error('You are not allowed to perform this action.');
    }
    const value = await create_schema.validateAsync(request.body);
    await department.create({...value, business_id: request.user.id});
    reply.code(201).send({
        status: 'Success', message: 'Department Account Created Successfully'
    });
}

export async function login(request: any, reply: any) {
    const value = await login_schema.validateAsync(request.body);
    const result = await department.login(value);
    reply.code(200).send({
        status: 'Success', 
        message: 'Logged In Successfully',
        data: result
    });
}