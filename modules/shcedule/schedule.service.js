import Schedule from "./schedule.model"
import Barber from '../barber/barber.model'

export const createSchedule = async (body) => {
    return await Schedule.create({
        date: body.date,
        text: body.text,
        barber: body.barber
    })
}

export const getSchedule = async () => {
    return await Schedule.find().sort({ date: -1 })
}


export const getScheduleWithBarberInfo = async (scheduleId) => {
    try {
        // Busca o agendamento pelo ID e popula os dados do barbeiro
        const schedule = await Schedule.findById(scheduleId).populate('barber');
        
        // Retorna o agendamento com as informações do barbeiro populadas
        return schedule;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const updateSchedule = async (body) => {
    return Schedule.findOneAndUpdate({
        _id: body.id,
    },
    {
        date: body.date,
    },
    {
        new: true
    })
}

export const deleteSchedule = async (id) => {
    return Schedule.findOneAndDelete({
        _id: id
    })
}