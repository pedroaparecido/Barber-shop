import Joi from "joi"

export const createScheduleSchema = Joi.object({
    date: Joi.date().required(),
    barber: Joi.object({
        title: Joi.string().required(),
        image: Joi.any()
    }).required(),
    text: Joi.string()
})