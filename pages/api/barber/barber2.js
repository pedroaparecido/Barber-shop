import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validation'

import { getOneBarber } from '../../../modules/barber/barber.service'

const handler = createHandler()

handler
    .get(async (req, res) => {
        try {
            const findABarber = await getOneBarber(req.body)
            
            res.status(200).send(findABarber)
        } catch (err) {
            res.status(500).send(err.message)
        }
    })

export default handler