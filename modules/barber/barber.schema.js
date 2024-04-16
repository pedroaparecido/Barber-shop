import Joi from "joi"

export const createBarberSchema = Joi.object({
    title: Joi.string().required,
    image: Joi.any()
})