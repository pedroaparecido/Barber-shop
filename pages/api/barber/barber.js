import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validation'

import { createBarber, getBarber, updateBarber } from '../../../modules/barber/barber.service'
import { createBarberSchema } from '../../../modules/barber/barber.schema'

const handler = createHandler()

handler
    .post(async (req, res) => {
        console.log(req.body)
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
            res.status(500).send(err.message)
        }
    })
    .patch(async (req, res) => {
        try {
            const update = await updateBarber(req.body)

            res.status(200).send(update)
        } catch (err) {
            res.status(500).send(err.message)
        }
    })

export default handler