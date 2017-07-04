const mongoose = require('mongoose');

const BookTaskSchema = mongoose.Schema({
    workpackages: {
        type: String,
        required: true

    },

    tasks: {
        type: String,
        required: true,
        // unique: true
    },

    usecases: {
        type: String,
        unique: true
    },
    psdate: {
        type: String,
        // required:true
    },
    pcdate: {
        type: String,
        // required:true
    },
    asdate: {
        type: String,
        // required:true
    },
    acdate: {
        type: String
    },
    ehours: {
        type: String
    },
    actuals: {
        type: String
    },
    trem: {
        type: String
    },
    review: {
        type: String
    }
});

const BookTask = module.exports = mongoose.model('BookTask', BookTaskSchema);