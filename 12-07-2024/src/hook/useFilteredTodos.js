import { useState, useEffect } from "react";

const useFilteredTodos = (todos, searchTerm) => {

    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        if(searchTerm !== "") {
            const lowerCaseFilter = searchTerm.toLowerCase();
            const filteredData = todos.filter(todo => todo.title.toLowerCase().includes(lowerCaseFilter));
            setFilteredTodos(filteredData);
        } else {
            setFilteredTodos(todos);
        }
    }, [todos, searchTerm])

    return filteredTodos;
}

export default useFilteredTodos;