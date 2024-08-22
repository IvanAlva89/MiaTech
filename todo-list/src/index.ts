import { Todo } from './types';

const todos: Todo[] = [];

const addTodo = (title: string) => {
    const newTodo: Todo = {
        id: todos.length,
        title,
        completed: false
    }
    todos.push(newTodo);

    return newTodo;
}

console.log(addTodo("Imparare React"));
console.log(addTodo("Imparare Typescript"));
console.log(addTodo("Imparare Javascript"));

const assignTodoToUser = (todoId: number, userId: number) => {
    const todo = todos.find(todo => todo.id === todoId)

    if(todo) {
        todo.userId = userId;
        return todo;
    }

    return null;
}

assignTodoToUser(2, 1);
console.log(todos);
