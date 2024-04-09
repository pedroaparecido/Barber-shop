import Barber from './barber.model'

export const createBarber = async (body) => {
    return await Barber.create({
        title: body.title,
        image: body.image
    })
}

export const getBarber = async () => {
    return Barber.find()
}

export const getOneBarber = async (body) => {
    return Barber.findOne({ body }).select()
}