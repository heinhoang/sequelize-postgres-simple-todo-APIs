const todoController = require('../controllers').todos;
const todoItemController = require('../controllers').todoItems;

module.exports = (app) => {
    app.get('/api', (req, res) => {
        res.status(201).send({
            message: "hello to API"
        });
    });
    app.post('/api/todos', todoController.create);
    app.get('/api/todos', todoController.list);
    app.get('/api/todos/:todoId', todoController.retrieve);
    app.put('/api/todos/:todoId', todoController.update);
    app.delete('/api/todos/:todoId', todoController.destroy);
    
    app.post('/api/todos/:todoId/items', todoItemController.create);
    app.put('/api/todos/:todoId/items/:todoItemId', todoItemController.update);
    app.delete('/api/todos/:todoId/items/:todoItemId', todoItemController.destroy);

    // For any other request method on todo items, we're going to return "Method Not Allowed"
    app.all('/api/todos/:todoId/items', (req, res) =>
        res.status(405).send({
        message: 'Method Not Allowed',
    }));
};