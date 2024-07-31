import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { useParams } from "react-router-dom";

const TodoDetail = () => {
    const { todoList } = useContext(TodoContext);
    const { id } = useParams();
    const todo = todoList.find((todo) => todo.id == parseInt(id));

    if(!todo) return <div>Todo non trovato</div>;

    return (
        <>
            <h1>{todo.title}</h1>
            <p>Todo completed: {todo.completed ? "Si": "No"}</p>
        </>
    )
}

export default TodoDetail;