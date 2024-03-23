import Joi from "joi"

export const createScheduleSchema = Joi.object({
    date: Joi.date().required(),
    barber: Joi.object({
        name: Joi.string().required(),
        image: Joi.any()
    }).required(),
    text: Joi.string()
})