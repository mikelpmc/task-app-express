// Logic with MongoDB
const Task = require('./../models/Task');

const logic = (function() {
    return {
        addTask: function(text) {
            if (text.trim() === '') throw Error('Text cannot be empty');

            const task = new Task({
                id: Date.now(),
                text: text,
                done: false
            });

            return task.save();
        },

        listTodos: function() {
            return Task.find({ done: false });
        },

        listDones: function() {
            return Task.find({ done: true });
        },

        markTaskDone: function(id) {
            return Task.findByIdAndUpdate(id, { $set: { done: true } });
        },

        removeTask: function(id) {
            return Task.deleteOne({ _id: id });
        }
    };
})();

module.exports = logic;
