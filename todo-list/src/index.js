"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todos = [];
var addTodo = function (title) {
    var newTodo = {
        id: todos.length,
        title: title,
        completed: false
    };
    todos.push(newTodo);
    return newTodo;
};
console.log(addTodo("Imparare React"));
console.log(addTodo("Imparare Typescript"));
console.log(addTodo("Imparare Javascript"));
var assignTodoToUser = function (todoId, userId) {
    var todo = todos.find(function (todo) { return todo.id === todoId; });
    if (todo) {
        todo.userId = userId;
        return todo;
    }
    return null;
};
assignTodoToUser(2, 1);
console.log(todos);
