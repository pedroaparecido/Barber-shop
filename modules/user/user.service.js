import { hashPassword, comparePassword } from "../../utils/bcrypts"

import User from './user.model'

export const signupUser = async (body) => {
    try {
        const user = {
            ...body,
            password: hashPassword(body.password)
        }
        const dbUser = await User.create(user)
        return dbUser
    } catch (err) {
        throw err
    }
    
}

export const login = async (body) => {
    try {
        const user = await User.findOne({
            $or: [
                { user: body.userOrEmail },
                { email: body.userOrEmail }
            ]
        })

        if (!user) throw new Error('not found')
        const passwordIsCorrect = comparePassword(body.password, user.password)
        if (!passwordIsCorrect) throw new Error('incorrect password')

        return user
    } catch (err) {
        throw err
    }
}

export const updateImage = async (id, body) => {
    const response = await User.findOneAndUpdate({
            _id: id
        }, {
            image: body
        }, {
            new: true
        }
    )
    return response
}