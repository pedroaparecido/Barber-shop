import mongoose from "mongoose"

const UserSchema = mongoose.Schema({
    name: { type: String, required: true, maxlength: 50 },
    user: { type: String, required: true, maxlength: 30, unique: true },
    email: { type: String, required: true, maxlength: 100, unique: true },
    celphone: { type: String, required: true, maxlength: 11 },
    password: { type: String, required: true }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)