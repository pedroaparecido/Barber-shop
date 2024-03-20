import Joi from "joi"

export const signupSchema = Joi.object({
    name: Joi.string().required().max(50).message('Máximo {{#limit}} caracteres'),
    user: Joi.string().required().max(30).message('Máximo {{#limit}} caracteres'),
    email: Joi.string().email({ tlds: { allow: false } }).required().max(100).message('Máximo {{#limit}} caracteres'),
    celphone: Joi.string().required().max(11).message('Máximo {{#limit}} caracteres'),
    password: Joi.string().required().max(50).message('Máximo {{#limit}} caracteres').min(6).message('Minimo {{#limit}} caracteres')
})