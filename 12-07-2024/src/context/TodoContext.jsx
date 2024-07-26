import React from "react";
import { useState, createContext, useEffect } from "react";
import useFetch from "../hook/useFetch";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const {data: todos , loading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        if(todos) {
            setTodoList(todos)
        }
    }, [todos])

    return (
        <TodoContext.Provider value={{ todoList, setTodoList, loading, error }}>
            {children}
        </TodoContext.Provider>
    )
}


