import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validation'

import { createSchedule, getSchedule } from '../../../modules/shcedule/schedule.service'
import { createScheduleSchema } from '../../../modules/shcedule/schedule.schema'

const handler = createHandler()

handler.
    post(validate({ body: createScheduleSchema }), async (req, res) => {
        try {
            const schedule = await createSchedule(req.body)

            res.status(201).send(schedule)
        } catch (err) {
            res.status(500).send(err.message)
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