const mongoose = require("mongoose")

require("dotenv").config()

const MONGODB_URI = process.env.MONGODB_URI

mongoose.set('strictQuery', true)

async function main() {
    await mongoose.connect(MONGODB_URI)
    console.log('conectado')
}
main().catch((err) => console.log(err))

module.exports = main