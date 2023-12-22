const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TestSchema = new Schema({

    name: {
        type: String,
        required: true
    },


    gender: {
        type: String,
        required: true
    },

    cnumber: {
        type: String,
        required: true
    },

    appointment: {
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
        }
    }

},
    { timestamps: true }
)

const Test = mongoose.model("Test", TestSchema);

module.exports = Test;