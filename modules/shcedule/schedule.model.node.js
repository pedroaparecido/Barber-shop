const mongoose = require("mongoose")

const ScheduleSchema = mongoose.Schema({
    date: { type: Date, required: true },
    barber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Barber',
        required: true
    },
    text: { type: String }
})

module.exports = mongoose.models.Schedule || mongoose.model('Schedule', ScheduleSchema)