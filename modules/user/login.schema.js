import Joi from "joi"

export const loginSchema = Joi.object({
    userOrEmail: Joi.string().required(),
    password: Joi.string().required().max(50).message('Máximo {{#limit}} caracteres').min(6).message('Minimo {{#limit}} caracteres')
})