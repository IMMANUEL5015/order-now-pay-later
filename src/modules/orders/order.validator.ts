import Joi from "joi";

export const create_schema = Joi.object({
    amount: Joi.number()
        .required(),

    item: Joi.string()
        .required(),

    quantity: Joi.number()
        .required(),

    pay_now: Joi.boolean()
        .required(),
});
