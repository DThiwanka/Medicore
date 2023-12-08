const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PatientSchema = new Schema({

    name: {
        type: String,
        required : true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required:true
    },

    gender: {
        type: String,
        required:true
    },

    bloodGroup: {
        type: String,
        required:true
    },

    address: {
        type: String,
        required:true
    },


    notes: {
        type:String,
    }

})

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;