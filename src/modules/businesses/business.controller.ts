import business from './business.service';
import {schema} from './business.validator';

export async function create(request: any, reply: any) {
    const value = await schema.validateAsync(request.body);
    await business.create(value);
    reply.code(201).send({
        status: 'Success', message: 'Business Account Created Successfully'
    });
}