import mongoose from "mongoose"

const BarberSchema = mongoose.Schema({
    title: { type: String },
    image: { type: Buffer }
})

export default mongoose.models.Barber || mongoose.model('Barber', BarberSchema)