import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validation'

import { createSchedule } from '../../../modules/shcedule/schedule.service'
import { createScheduleSchema } from '../../../modules/shcedule/schedule.schema'

const handler = createHandler()

handler.
    post(validate({ body: createScheduleSchema }), async (req, res) => {
        try {
            const schedule = createSchedule()

            res.status(201).send(schedule)
        } catch (err) {
            res.status(400).send(err)
        }
    })

export default handler