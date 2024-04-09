import Joi from "joi"

export const createScheduleSchema = Joi.object({
    date: Joi.date().required(),
    Barber: Joi.object({
        title: Joi.string(),
        image: Joi.any()
    }).required(),
    text: Joi.string()
})