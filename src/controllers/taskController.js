// Uses logic and routes

const Task = require('./../models/Task');
const logic = require('./../logic/tasks-mongo');

// Display all tasks
exports.listAll = async (req, res) => {
    const todos = await logic
        .listTodos()
        .then(res => res)
        .catch(console.error);

    const dones = await logic
        .listDones()
        .then(res => res)
        .catch(console.error);

    res.render('tasks', {
        todos,
        dones
    });
};

// Add task
exports.addTask = (req, res) => {
    const { text } = req.body;

    logic
        .addTask(text)
        .then(resp => {
            res.redirect('/tasks');
        })
        .catch(console.error);
};

// Mark task done
exports.markTaskDone = async (req, res) => {
    const { id } = req.params;

    const task = await logic.markTaskDone(id).then(res => res);

    task ? res.redirect('/tasks') : res.redirect('/tasks?err="mierdaaaaaaaaa"');
};

// Remove task
exports.removeTask = async (req, res) => {
    const { id } = req.params;

    const isDeleted = await logic
        .removeTask(id)
        .catch(err => (err ? false : true));

    isDeleted
        ? res.redirect('/tasks')
        : res.redirect('/tasks?error=Error+deleting+task');
};

// Display list todos
exports.listTodos = (req, res) => {
    res.send('LIST TODOS');
};

// Display list dones
exports.listDones = (req, res) => {
    res.send('LIST DONES');
};
