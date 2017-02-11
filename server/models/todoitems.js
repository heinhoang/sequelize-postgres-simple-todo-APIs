'use strict';
module.exports = function(sequelize, DataTypes) {
  var TodoItems = sequelize.define('TodoItems', {
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        TodoItems.belongsTo(models.Todo, {
          foreignKey: 'todoId',
          onDelete: 'CASCADE' // if we delete a todo, it's associated todo items should be deleted as well
        });
      }
    }
  });
  return TodoItems;
};