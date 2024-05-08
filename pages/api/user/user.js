import { withIronSessionApiRoute } from "iron-session/next"

import createHandler from "../../../lib/middlewares/nextConnect"
import validate from "../../../lib/middlewares/validation"

import { updateImage } from "../../../modules/user/user.service" 

import { ironConfig } from '../../../lib/middlewares/iron-session'

const handler = createHandler()

handler
    .patch(async (req, res) => {
        try {
            const session = req.session.user = {
                id: req.body.user.id,
                user: req.body.user.user,
                image: req.body.image
            }
            const image = await updateImage(req.body.user.id, req.body.image)
            await req.session.save()
            res.status(200).send(session)
        } catch (err) {
            res.status(400).send(err.message)
        }
    })

    export default withIronSessionApiRoute(handler, ironConfig)