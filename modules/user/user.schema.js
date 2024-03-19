import Joi from "joi"

export const createUserSchema = Joi.object({
    name: Joi.string().required().max(50),
    user: Joi.string().required().max(30),
    email: Joi.string().email().required().max(100),
    celphone: Joi.string().required().max(11),
    password: Joi.string().required().max(50).min(6)
})