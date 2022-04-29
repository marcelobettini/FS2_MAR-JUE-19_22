import Todo from "./Todo"
function TodoList({ todoList }) {

    return (
        <>
            <h1>Lista de Tareas</h1>
            <p>también hay más cosas, propias del componente TodoList</p>
            <ol>
                {todoList.map((item) => (
                    <Todo key={item.id} todo={item}></Todo>
                ))}
            </ol>



        </>
    )
}

export default TodoList