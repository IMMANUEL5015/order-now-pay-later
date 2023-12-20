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