import { Todo } from './types';

const todos: Todo[] = [];

const addTodo = (title: string) => {
    const newTodo: Todo = {
        id: new Date().getTime() + 1,
        title,
        completed: false
    }
    todos.push(newTodo);

    return newTodo;
}

// console.log(addTodo("Imparare React"));
// console.log(addTodo("Imparare Typescript"));
// console.log(addTodo("Imparare Javascript"))
// console.log(todos);
