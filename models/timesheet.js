const mongoose = require('mongoose');


const TimeSchema =  mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    workpackage: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    },
    hours: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },

});

const Time = module.exports = mongoose.model('Timesheet',TimeSchema);