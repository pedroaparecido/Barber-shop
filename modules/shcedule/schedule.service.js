import Schedule from "./schedule.model"

export const createSchedule = async (body) => {
    try {
        const newSchedule = Schedule.create(body)

        if (newSchedule.status === 201) {
            return newSchedule
        }
    } catch (err) {
        throw err
    }
}