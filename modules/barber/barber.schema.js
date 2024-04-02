import Joi from "joi"

export const createBarberSchema = Joi.object({
    title: Joi.string(),
    image: Joi.any()
})