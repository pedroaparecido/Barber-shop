import mongoose from "mongoose"

const ScheduleSchema = mongoose.Schema({
    date: { type: Date, required: true },
    Barber: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Barber'
    }],
    text: { type: String }
})

export default mongoose.models.Schedule || mongoose.model('Schedule', ScheduleSchema)