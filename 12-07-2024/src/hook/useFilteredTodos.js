import { useState, useEffect } from "react";

const useFilteredTodos = (todos, searchTerm) => {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        const filterTodos = todos.filter(todo => todo.includes(searchTerm));
        setFilteredTodos(filterTodos);
    }, [todos, searchTerm])

    return filteredTodos;
}

export default useFilteredTodos;