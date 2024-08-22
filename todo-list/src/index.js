"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todos = [];
var addTodo = function (title) {
    var newTodo = {
        id: new Date().getTime() + 1,
        title: title,
        completed: false
    };
    todos.push(newTodo);
    return newTodo;
};
// console.log(addTodo("Imparare React"));
// console.log(addTodo("Imparare Typescript"));
// console.log(addTodo("Imparare Javascript"))
// console.log(todos);
