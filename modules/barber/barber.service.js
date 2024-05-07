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

export const getOneBarber = async (barberId) => {
    return await Barber.findById(barberId)
}

export const updateBarber = async (body) => {
    return Barber.findOneAndUpdate({
        _id: body._id
    }, {
        title: body.title
    }, {
        new: true
    })
}