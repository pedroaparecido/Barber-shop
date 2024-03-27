import Joi from "joi"

export const createScheduleSchema = Joi.object({
    date: Joi.date().required(),
    Barber: Joi.object({
        title: Joi.string().required(),
        image: Joi.any()
    }),
    text: Joi.string()
})