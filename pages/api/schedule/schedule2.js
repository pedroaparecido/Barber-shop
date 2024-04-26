import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validation'

import Schedule from '../../../modules/shcedule/schedule.model'
import { getScheduleWithBarberInfo } from '../../../modules/shcedule/schedule.service'

const handler = createHandler()

handler.get(async (req, res) => {
    try {
        const findSchedule = await getScheduleWithBarberInfo(req.body);
        console.log(findSchedule)
        res.status(200).send(findSchedule);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


export default handler