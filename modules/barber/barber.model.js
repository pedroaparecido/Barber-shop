import mongoose from "mongoose"

const BarberSchema = mongoose.Schema({
    title: { type: String, required: true },
    image: { type: Buffer }
})

export default mongoose.models.Barber || mongoose.model('Barber', BarberSchema)