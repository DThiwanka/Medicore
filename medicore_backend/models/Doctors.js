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
        required: true
    },

    assignedPatients: {
        type: [
            {
                patientID: {
                    type: String
                },
            }
        ],
    },

    docNotes: {
        type: String,
        required: true
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

    degree: {
        type: String
    },

    awards: {
        type: String
    },

    history: {
        type: String
    },

    achievements: {
        type: String
    },

    phoneNumber: {
        type: String
    },

    schedule: {
        type: String // You may want to use a more structured format for the schedule
    },

    medicalSchool: {
        type: String
    },

    graduationYear: {
        type: String
    },

    workExperience: {
        type: String
    },

    licenseNumber: {
        type: String
    },

    certifications: {
        type: String
    },

    languagesSpoken: {
        type: [String]
    },

    acceptedInsurances: {
        type: [String]
    },

    researchInterests: {
        type: String
    },

    publications: {
        type: String
    },

    professionalMemberships: {
        type: String
    },

    website: {
        type: String
    },

    linkedInProfile: {
        type: String
    },

    emergencyContact: {
        type: String
    },

    hospitalAffiliation: {
        type: String
    }

});

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;
