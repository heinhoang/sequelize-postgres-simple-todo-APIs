# Sequelize Postgres Simple Todo APIs
In this app, we create APIs for CRUD requesting. 

## Requirements
- You need [postman](https://www.getpostman.com) for testing API
- `Postgres` for database storage
- `NodeJS`, `ExpressJS` for server

## Usage
- run `npm install`
- install nodemon globaly `npm install -g nodemon`
- run `npm run start:dev` to start NodeJS server

## Testing API
- open postman app or chrome extension
- send POST request to `http://localhost:8000/api/todos` to create a new to Todo
- send POST request to `http://localhost:8000/api/todos/1/items` to create new TodoItem belongs to the above to Todo
and other API services, see more in `./server/routes/index.js` please.