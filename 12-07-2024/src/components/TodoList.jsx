import React, { useState, useCallback, useMemo, useRef, useEffect, useContext } from 'react';
import useFetch from '../hook/useFetch';
import useFilteredTodos from '../hook/useFilteredTodos';
import { TodoContext } from '../context/TodoContext';

import { Link } from 'react-router-dom';

const TodoList = () => {
    const {todoList, loading, error} = useContext(TodoContext);
    const [searchTerm, setSearchTerm] = useState("");
    const filteredTodos = useFilteredTodos(todoList, searchTerm);
    const memoFilteredTodos = useMemo(() => filteredTodos, [filteredTodos]);
    const inputRef = useRef();

    const handleSearch = useCallback((event) => {
        setSearchTerm(event.target.value);
    }, [])

    useEffect(() => {
        // console.log(inputRef.current);
        if(inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    if(loading){
        return (
            <div>Loading...</div>
        )
    }

    if(error){
        return (
            <div>Errore: {error}</div>
        )
    }

    return (
        <>
            <input 
                type="text"
                value={searchTerm}
                onInput={handleSearch}
                ref={inputRef}
            />
            <ul>
                {
                    memoFilteredTodos.map(todo => (
                        <li key={todo.id}><Link to={`/todo/${todo.id}`}>{todo.title}</Link></li>
                    ))
                }
            </ul>
        </>
    )
}

export default TodoList;