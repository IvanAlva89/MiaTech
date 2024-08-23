import { Project, Todo, User } from './types';

const todos: Todo[] = [];

const addTodo = (title: string, metadata?: string | object) => {
    const newTodo: Todo = {
        id: todos.length,
        title,
        completed: false,
        metadata
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


const getUserTodos = (userId: number) => {
    return todos.filter(todo => todo.userId ===  userId);
}

console.log(getUserTodos(1));


const throwError = (message: string): never => {
    throw new Error(message);
}

const parseInput = (input: unknown) => {
    if(typeof input === "string") return input;
    else if(typeof input === "number") return input.toString();
    else throwError("Invalid input");
}

console.log(parseInput("Hello World"));


const updateTodo = (todo: Todo, updates: Partial<Todo>): Todo => {
    return {
        ...todo,
        ...updates
    }
}

const todoTest = {
    id: 1,
    title: "Hello World",
    completed: false
}

const todoUpdate = updateTodo(todoTest, {
    completed: true
});

console.log(todoUpdate);

const userTest: User = {
    id: 2,
    name: "Loisa",
    email: "example@example.com",
    todos: [{id: 1, title: "Hello World", completed: false }]
}

console.log(userTest);


const getTodoSummary = (todo: Todo): [string, boolean] => {
    return [todo.title, todo.completed];
}


const createProject = (id: number, name: string, users: User[], todos: Todo[]): Project => {
    return {
        id,
        name,
        users,
        todos 
    }
}