const mongoose = require('mongoose');

const AddTaskSchema = mongoose.Schema({
    workpackage: {
        type: String,
        required: true,
        // unique: true
    },

    task: {
        type: String,
        required: true,
        // unique: true
    },

    usecase: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        required: true,

    }
});

const AddTask = module.exports = mongoose.model('AddTask', AddTaskSchema);