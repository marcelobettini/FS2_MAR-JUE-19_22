import { v4 as uuid } from "uuid"
import TodoList from "./TodoList"
import { useState, useRef } from "react"

const Home = () => {
    const [todoList, setTodoList] = useState([])

    const todoRef = useRef()
    const handleAddTodo = (e) => {
        e.preventDefault()
        const newTodo = {
            id: uuid(),
            description: todoRef.current.value,
            completed: false
        }
        setTodoList((prevState) => {
            return [...prevState, newTodo]
        })
        todoRef.current.value = null


    }


    return (
        <>
            <h1>Aplicación General que hace de todo</h1>
            <nav>acá hay más cosas y etc.</nav>
            <TodoList todoList={todoList}></TodoList>
            <div>
                <form>
                    <input ref={todoRef} type="text" placeholder="nueva tarea..." />
                    <button onClick={handleAddTodo}>Agregar tarea</button>
                    <button>Eliminar completas</button>
                </form>
            </div>
        </>
    )
}

export default Home

