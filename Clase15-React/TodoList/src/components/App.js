import React, { useState, useRef } from "react"; //Fragment es igual a <></> sin necesidad de importarlo de React
import { v4 as uuid } from "uuid"
import TodoList from "./TodoList"
import { Container, Row, Form, FloatingLabel, Button } from "react-bootstrap"


function App() {

    const [todos, setTodos] = useState([])
    const [editMode, setEditMode] = useState(false)
    const [id, setId] = useState(null)
    const todoRef = useRef()
    const btnRef = useRef()

    const handleTodo = (e) => {
        e.preventDefault()
        const description = todoRef.current.value;
        if (description === "") return;
        if (!editMode) {

            const newTodo = {
                id: uuid(),
                description,
                completed: false
            };
            setTodos((prevState) => [...prevState, newTodo])
            todoRef.current.value = null
        } else {
            const arrEdit = todos.map((item) =>
                item.id === id ? { ...item, description: todoRef.current.value } : item
            )
            setTodos(arrEdit)
            btnRef.current.innerText = "Agregar Tarea"
            setEditMode(false)
        }
        todoRef.current.value = null
    };

    const deleteCompleted = () => {
        setTodos(todos.filter(el => el.completed === false))
    };


    return (
        <Container>
            <h1 className="text-center mt-4">Fancy Todo List</h1>
            <Form onSubmit={(e) => e.preventDefault()} className="my-5"
            >
                <Row className="align-items-center justify-content-center text-capitalize">
                    <Form.Group className="col-12 col-lg-8">
                        <FloatingLabel controlId="floatingInput" label="Nueva Tarea">
                            <Form.Control ref={todoRef} type="text" placeholder="Ingrese descripción..." autoFocus />
                        </FloatingLabel>
                    </Form.Group>
                    <Button ref={btnRef} size="sm" variant="success" className="mt-4 w-50" onClick={handleTodo}>Agregar Tarea</Button>
                    <Button size="sm" variant="danger" className="m-2 w-50" onClick={deleteCompleted}>Eliminar Finalizadas</Button>
                </Row>
            </Form>

            <Row className="text-center">
                <TodoList
                    todos={todos} //el estado
                    setTodos={setTodos} //el setter de estado
                    todoRef={todoRef} //el input
                    btnRef={btnRef} //el botón de agregar (lo vamos a usar para cambiarle el texto)
                    setId={setId} //con este setter, desde todo indicamos cuál es el id del elemento a modificar
                    setEditMode={setEditMode} //con este setter, desde todo indicamos si estamos en modo edición, para que la función handleTodo sepa si tiene que agregar o editar el contenido del input.
                />
            </Row>

        </Container >
    )
}
export default App;

