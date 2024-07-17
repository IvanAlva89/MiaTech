import React from 'react';
import useFetch from '../hook/useFetch';

const TodoList = () => {
    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");

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
            <ul>
                {
                    data.map(todo => (
                        <li key={todo.id}>{todo.title}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default TodoList;