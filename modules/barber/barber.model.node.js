const mongoose = require("mongoose")

const BarberSchema = mongoose.Schema({
    title: { type: String },
    image: { type: String }
})

module.exports = mongoose.models.Barber || mongoose.model('Barber', BarberSchema)