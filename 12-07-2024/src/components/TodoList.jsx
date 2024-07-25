import React, { useState, useCallback, useMemo } from 'react';
import useFetch from '../hook/useFetch';
import useFilteredTodos from '../hook/useFilteredTodos';

const TodoList = () => {
    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [searchTerm, setSearchTerm] = useState("");
    const filteredTodos = useFilteredTodos(data, searchTerm);
    const memoFilteredTodos = useMemo(() => filteredTodos, [filteredTodos]);

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
                    memoFilteredTodos.map(todo => (
                        <li key={todo.id}>{todo.title}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default TodoList;