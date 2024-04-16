import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validation'

import { createBarber, getBarber } from '../../../modules/barber/barber.service'
import { createBarberSchema } from '../../../modules/barber/barber.schema'

const handler = createHandler()

handler
    .post(validate({ body: createBarberSchema }), async (req, res) => {
        try {
            const newBarber = await createBarber(req.body)

            res.status(201).send(newBarber)
        } catch (err) {
            res.status(500).send(err.message)
        }
    })
    .get(async (req, res) => {
        try {
            const barber = await getBarber()

            res.status(200).send(barber)
        } catch (err) {
            res.status(500).send(err)
        }
    })

export default handler