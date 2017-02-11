'use strict';
module.exports = function (sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      classMethods: {
        associate: (models) => {
          Todo.hasMany(models.TodoItems, {
            foreignKey: 'todoId',
            as: 'todoItems' // alias for querying
          });
        }
      }
    });
  return Todo;
};