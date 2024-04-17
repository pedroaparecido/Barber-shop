import mongoose from "mongoose"

const ScheduleSchema = mongoose.Schema({
    date: { type: Date, required: true },
    barber: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Barber',
        required: true
    }],
    text: { type: String }
})

export default mongoose.models.Schedule || mongoose.model('Schedule', ScheduleSchema)