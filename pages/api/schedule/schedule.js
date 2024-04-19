import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validation'

import { createSchedule, getSchedule, populateSchedule } from '../../../modules/shcedule/schedule.service'
import { getOneBarber } from '../../../modules/barber/barber.service'
import { createScheduleSchema } from '../../../modules/shcedule/schedule.schema'

const handler = createHandler()

handler
    .post(async (req, res) => {
        try {
            // Obtém o ID do barber enviado no corpo da requisição
            const barberId = req.body._id;

            // Aqui você deve buscar o barber usando o ID recebido
            const barberData = await getOneBarber({ _id: barberId });

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

export default handler