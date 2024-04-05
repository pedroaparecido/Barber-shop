import Administrative from './administrative.model'

export const login = async (body) => {
    try {
        const userAdmin = await Administrative.findOne({
            adminUser : body.adminUser
        })
        
        return userAdmin
    } catch (err) {
        throw err
    }
}