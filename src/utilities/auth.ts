import bcrypt from 'bcrypt';

const salt = 10;

export const hash = async (password: string) => {
    return await bcrypt.hash(password, salt);
}

export const compare = async (password: string, hashed: string) => {
    return await bcrypt.compare(password, hashed);
}