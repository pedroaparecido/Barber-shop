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

export const updateSchedule = async (scheduleData) => {
    try {
        // Crie uma instância do modelo Schedule com os dados atualizados
        const updatedSchedule = new Schedule(scheduleData);

        // Salve a instância atualizada no banco de dados
        const savedSchedule = await updatedSchedule.save();

        return savedSchedule; // Retorne o objeto de agendamento atualizado
    } catch (error) {
        console.log(error);
    }
};
