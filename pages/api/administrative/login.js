import { withIronSessionApiRoute } from "iron-session/next"

import createHandler from "../../../lib/middlewares/nextConnect"
import validate from "../../../lib/middlewares/validation"

import { login } from "../../../modules/administrative/administrative.service" 
import { admLoginSchema } from '../../../modules/administrative/administrative.schema'

import { ironConfig } from '../../../lib/middlewares/iron-session'



const handler = createHandler()

handler.post(validate({ body: admLoginSchema }), async (req, res) => {
    try {
        const adminUser = await login(req.body)
        
        if (req.body.password === process.env.ADMIN_PASSWORD) {
            req.session.user = {
                id: adminUser._id,
                user: adminUser.adminUser,
                admin: true
            }
            await req.session.save()
            res.redirect('/administrative')
        }
    } catch (err) {
        console.log(err)
    }
})

export default withIronSessionApiRoute(handler, ironConfig)