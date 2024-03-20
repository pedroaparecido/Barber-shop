import createHandler from "../../../lib/middlewares/nextConnect"
import validate from "../../../lib/middlewares/validation"

import { login } from "../../../modules/user/user.service" 
import { loginSchema } from '../../../modules/user/login.schema'

const handler = createHandler()

handler.post(validate({ body: loginSchema }), async (req, res) => {
    try {
        const user = await login(req.body)
        res.send(user)
    } catch (err) {
        console.error(err)
        throw err
    }
    
    })

export default handler