import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validation'

import { createSchedule, deleteSchedule, getSchedule, updateSchedule } from '../../../modules/shcedule/schedule.service'
import { getOneBarber } from '../../../modules/barber/barber.service'
import { createScheduleSchema } from '../../../modules/shcedule/schedule.schema'

const handler = createHandler()

handler
    .post(async (req, res) => {
        try {
            // Obtém o ID do barber enviado no corpo da requisição
            

            // Aqui você deve buscar o barber usando o ID recebido
            const barberData = await getOneBarber(req.body.barber._id);
            // Verifica se o barberData não está vazio
            if (!barberData) {
                return res.status(404).send('Barber não encontrado');
            }
            
            // Cria o agendamento usando os dados do barber e outros dados recebidos
            const scheduleData = {
                barber: barberData,
                ...req.body
            };
            const schedule = await createSchedule(scheduleData);

            res.status(201).send(schedule);
        } catch (err) {
            res.status(500).send(err.message);
        }
    })
    .get(async (req, res) => {
        try {
            const schedule = await getSchedule()

            res.status(200).send(schedule)
        } catch (err) {
            res.status(500).send(err.message)
        }
    })
    .patch(async (req, res) => {
        try {
            const update = await updateSchedule(req.body)

            res.status(200).send(update)
        } catch (err) {
            res.status(500).send(err.message)
        }
    })
    .delete(async (req, res) => {
        try {
            const scheduleDelete = await deleteSchedule(req.body.id)

            res.status(200).send(scheduleDelete)
        } catch (err) {
            res.status(500).send(err.message)
        }
    })

export default handler