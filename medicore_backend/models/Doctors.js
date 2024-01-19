const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DoctorSchema = new Schema({

    doccode: {
        type: String,
        required: true
    },

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

    gender: {
        type: String,
        required: true
    },

    specialization: {
        type: String,
        required:true
    },

    assignedPatients: {
        type: Array,
        default:[],
    },

    docNotes: {
        type: String,
        required:true
    },

    department: {
        type: String,
    },

    address: {
        type: String,
        required: true
    },

    age: {
        type: String,
        required: true
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



})

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;