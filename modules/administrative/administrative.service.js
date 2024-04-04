import Administrative from './administrative.model'
import { hashPassword, comparePassword } from "../../utils/bcrypts"

export const login = async (body) => {
    try {
        const userAdmin = Administrative.findOne({
            $or: [
                { user: body.adminUser },
                { email: body.adminUser }
            ]
        })
        
        if (!userAdmin) throw new Error('not found')
        const passwordIsCorrect = comparePassword(body.password, userAdmin.password)
        if (!passwordIsCorrect) throw new Error('incorrect password')
        return userAdmin
    } catch (err) {
        throw err
    }
}