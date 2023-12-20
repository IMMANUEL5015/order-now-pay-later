import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken'
import { login } from '../modules/businesses/business.dto';

const salt = 10;
const secret = process.env.SECRET!;

export const hash = async (password: string) => {
    return await bcrypt.hash(password, salt);
}

export const compare = async (password: string, hashed: string) => {
    return await bcrypt.compare(password, hashed);
}

export const sign = async (user: login) => {
    const token = await jsonwebtoken.sign( user, secret, { expiresIn: '7d' });
    return token;
}

export const verify = async (token: string) => {
    const user = await jsonwebtoken.verify(token, secret);
    return user;
}

export const protect = async function (request: any, reply: any, done: any) {
    const {authorization} = request.headers;
    if (!authorization) {
        throw new Error('Please login to perform this action.');
    }

    const token = authorization.split(' ')[1];
    if (!token) {
        throw new Error('Please login to perform this action.');
    }

    const user = await verify(token);
    
    request.user = user;
}