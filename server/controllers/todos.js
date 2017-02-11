const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItems;

module.exports = {
    create(req, res) {
        return Todo
            .create({
                title: req.body.title
            })
            .then(todo => res.status(201).send(todo))
            .catch(err => res.status(400).send(err));
    },
    list(req, res) {
        return Todo
            .findAll({
                include: [{
                    model: TodoItem,
                    as: 'todoItems',
                }],
            })
            .then(todos => res.status(200).send(todos))
            .catch(error => res.status(400).send(error));
    },
    retrieve(req, res) {
        return Todo
        .findById(req.params.todoId, {
            include: [{
                model: TodoItem,
                as: 'todoItems'
            }]
        })
        .then(todo => {
            if(!todo) {
                return res.status(404).send({message: 'not found'})
            }
            return res.status(200).send(todo);
        })
        .catch(err => res.status(400).send(err));
    },
    update(req, res) {
        return Todo
        .findById(req.params.todoId, {
            include: [{
                model: TodoItem,
                as: 'todoItems'
            }]
        })
        .then(todo => {
            if(!todo) {
                return res.status(404).send({message: 'todo can\'t be found'});
            }
            return todo.update({
                title: req.body.title || todo.title
            })
            .then(todo => res.status(200).send(todo))
            .catch(err => res.satus(400).send(todo));
        })
        .catch(err => res.status(400).res(todo));
    },
    destroy(req, res) {
        return Todo
        .findById(req.params.todoId)
        .then(todo => {
            if(!todo) {
                return res.status(400).send({message: 'todo not found'});
            }
            return todo
            .destroy()
            .then(() => res.status(200).send({message: 'delete todo success'}))
            .catch(err => res.status(400).send(err));
        });
    }
};
