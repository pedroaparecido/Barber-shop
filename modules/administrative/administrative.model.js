import mongoose from "mongoose"

const admSchema = mongoose.Schema({
    adminUser: { type: String, required: true },
    password: { type: String, required: true }
})

export default mongoose.models.Administrative || mongoose.model('Administrative', admSchema)