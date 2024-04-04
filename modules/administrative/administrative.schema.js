import Joi from "joi"

export const admLoginSchema = Joi.object({
    adminUser: Joi.string().required(),
    password: Joi.string().required()
})