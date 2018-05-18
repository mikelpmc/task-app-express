const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    text: String,
    id: String,
    done: Boolean
});

mongoose.model('Task', TaskSchema);

module.exports = mongoose.model('Task');
