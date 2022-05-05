import Todo from "./Todo"
function TodoList({ todos }) {
    return (
        <>
            <ol>
                {todos.map((item) => (
                    <Todo key={item.id} todo={item}></Todo>
                ))}
            </ol>
        </>
    )
}
export default TodoList