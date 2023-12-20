import { compare, hash, sign } from "../../utilities/auth";
import db from "../db";
import { create } from "./department.dto";

const business = {
    create: async (data: create) => {
        const exists = await db.department.findFirst({
            where: {
                OR: [
                    {name: data.name,}, {email: data.email,},
                ],
            },
        });

        if (exists) {
            throw new Error('Department name or email already exists.');
        }

        const hashed = await hash(data.password);
        const result = await db.department.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashed,
                business_id: data.business_id
            }
        });
        
        return result;
    },

    login: async (data: create) => {
        const department = await db.department.findFirst({
            where: {email: data.email},
        });

        if (!department) {
            throw new Error('Department email or password does not exist.');
        }

        const match = await compare(data.password, department.password);
        if (!match) {
            throw new Error('Department email or password does not exist.');
        }

        const token = await sign({
            email: department.email,
            id: department.id,
            name: department.name,
            role: 'department'
        });

        return token;
    }
};

export default business