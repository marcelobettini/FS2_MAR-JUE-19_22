import Todo from "./Todo"
import { Table } from 'react-bootstrap'
function TodoList({ todos, setTodos, todoRef, btnRef, setEditMode, setId }) {
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>ToDo</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((item) => (
                        <Todo
                            key={item.id}
                            todo={item}
                            todos={todos}
                            setTodos={setTodos}
                            todoRef={todoRef}
                            btnRef={btnRef}
                            setEditMode={setEditMode}
                            setId={setId}
                        >
                        </Todo>
                    ))}
                </tbody>
            </Table>
        </>
    )
}
export default TodoList