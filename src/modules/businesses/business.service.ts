import { hash } from "../../utilities/auth";
import db from "../db";
import { create } from "./business.dto";

const business = {
    create: async (data: create) => {
        const exists = await db.business.findFirst({
            where: {
                OR: [
                    {name: data.name,}, {email: data.email,},
                ],
            },
        });

        if (exists) {
            throw new Error('Business name or email already exists.');
        }

        const hashed = await hash(data.password);
        const result = await db.business.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashed,
                credit_score: 0
            }
        });
        
        return result;
    }
};

export default business