import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validation'

import { getOneSchedule } from '../../../modules/shcedule/schedule.service'

const handler = createHandler()

handler.post(async (req, res) => {
    try {
        const findSchedule = await getOneSchedule(req.body);
        console.log(findSchedule)
        res.status(200).send(findSchedule);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


export default handler