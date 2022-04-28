const Task = require('../models/task');
const taskCtrl = {}

taskCtrl.getAll = (req, res) => {
    res.json(Task.getAllTasks());
}

taskCtrl.getById = (req, res) => {
    const { id = 0 } = req.params;
    res.json(Task.getTaskById(id));
}

taskCtrl.create = (req, res) => {
    const { description = 'No description', author = 'No author' } = req.body;
    res.json(Task.createTask({ description, author }));
}

taskCtrl.update = (req, res) => {
    const { id = 0 } = req.params;
    const { description = 'No description', author = 'No author' } = req.body;
    res.json(Task.updateTask(id, { description, author }));
}

taskCtrl.delete = (req, res) => {
    const { id = 0 } = req.params;
    res.json(Task.deleteTask(id));
}

module.exports = taskCtrl;