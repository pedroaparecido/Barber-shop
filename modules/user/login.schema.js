import Joi from "joi"

const loginSchema = Joi.object({
    userOrEmail: Joi.string().required(),
    password: Joi.string().required()
})