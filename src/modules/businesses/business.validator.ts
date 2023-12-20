import Joi from "joi";

export const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
})
    .with('name', 'password')
    .with('password', 'email');
