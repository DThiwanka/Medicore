const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TestSchema = new Schema({

    name: {
        type:String,
    },

    date: {
        type: Date,
        default: Date.now,
    },

    time: {
        type: String,
        default: this.$where
    }


},
    { timestamps: true }
)

const Test = mongoose.model("Test", TestSchema);

module.exports = Test;