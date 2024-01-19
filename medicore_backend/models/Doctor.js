const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DoctorSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    connumber: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    age: {
        type: String,
        required: true
    },

    mlnumber: {
        type: String,
        required: true
    },

    specialization: {
        type: String,
    },

    department: {
        type: String,
    },

    details: {
        type: [
            {
                degree: {
                    type: String
                },

                awards: {
                    type: String
                },

                History: {
                    type: String
                },

                achivements: {
                    type: String
                },

            }

        ],
    },

    assignedPatients: {
        type: Array,
        default: [],
    },

}, {
    timestamps: true
}

)

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;