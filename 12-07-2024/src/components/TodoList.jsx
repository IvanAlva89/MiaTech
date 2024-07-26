import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import useFetch from '../hook/useFetch';
import useFilteredTodos from '../hook/useFilteredTodos';

const TodoList = () => {
    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [searchTerm, setSearchTerm] = useState("");
    const filteredTodos = useFilteredTodos(data, searchTerm);
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
                        <li key={todo.id}>{todo.title}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default TodoList;