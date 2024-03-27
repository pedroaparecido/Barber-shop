import Schedule from "./schedule.model"

export const createSchedule = async (body) => {
    return await Schedule.create({
        date: new Date,
        text: body.text
    })
}

export const getSchedule = async () => {
    return await Schedule.find().sort({ date: -1 })
}