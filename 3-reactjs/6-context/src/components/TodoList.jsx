import { useContext } from "react";

import { TodoContext } from "../Context/TodoContext";

const TodoList = () => {
    const { todos } = useContext(TodoContext)

    return(
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.task}
                </li>
            ))}
        </ul>
    )
}

export default TodoList