import Schedule from "./schedule.model"
import Barber from '../barber/barber.model'

export const createSchedule = async (body) => {
    return await Schedule.create({
        date: body.date,
        text: body.text
    })
}

export const getSchedule = async () => {
    return await Schedule.find().sort({ date: -1 })
}


export const getOneBarber = async () => {
    return await Schedule.findOne().populate('Barber', 'barber')
}