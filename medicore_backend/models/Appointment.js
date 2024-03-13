const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    time: {
        type: String,
        required: true
    },

    reason: {
        type: String,
        required: true
    },

    info: {
        type: String,
        required: true
    },


    doctor: {
        type: String,
        required: true,
    },

    insurance: {
        type: String,

    },

    notes: {
        type: String,

    },

    status: {
        type: Boolean,
    }

}, {
    timestamps: true
})

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;