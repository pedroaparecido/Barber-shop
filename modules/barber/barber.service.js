import Barber from './barber.model'
import Schedule from '../shcedule/schedule.model'

export const createBarber = async (body) => {
    return await Barber.create({
        title: body.title,
        image: body.image
    })
}

export const getBarber = async () => {
    return await Barber.find()
}

export const getOneBarber = async () => {
    return await Barber.findOne().populate('_id', 'schedule')
}