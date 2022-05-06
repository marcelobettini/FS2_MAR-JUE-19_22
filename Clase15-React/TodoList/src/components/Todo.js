import { Button } from "react-bootstrap"
const Todo = ({ todo, todos, setTodos, todoRef, btnRef, setEditMode, setId }) => {
    const toggleCompleted = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        )
    }
    const setForEdit = (id) => {
        btnRef.current.innerText = "Editar Tarea"
        setId(id)
        setEditMode(true)
        todoRef.current.value = todo.description

    }

    return (
        <tr>
            <td>{todo.description}</td>
            <td>{todo.completed ? "Done" : "Todo"}</td>
            <td><Button onClick={toggleCompleted}>toggle</Button></td>
            <td><Button onClick={() => setForEdit(todo.id)}>edit</Button></td>
        </tr>

    )
}
export default Todo

