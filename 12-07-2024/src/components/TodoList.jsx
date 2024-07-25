import React, { useState, useCallback } from 'react';
import useFetch from '../hook/useFetch';
import useFilteredTodos from '../hook/useFilteredTodos';

const TodoList = () => {
    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [searchTerm, setSearchTerm] = useState("");
    const filteredTodos = useFilteredTodos(data, searchTerm);

    const handleSearch = useCallback((event) => {
        setSearchTerm(event.target.value);
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
            />
            <ul>
                {
                    filteredTodos.map(todo => (
                        <li key={todo.id}>{todo.title}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default TodoList;