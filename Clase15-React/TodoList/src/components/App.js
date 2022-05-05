import React, { useState, useRef } from "react"; //Fragment es igual a <></> sin necesidad de importarlo de React
import { v4 as uuid } from "uuid"
import TodoList from "./TodoList"
import { Container, Row, Form, FloatingLabel, Button } from "react-bootstrap"


function App() {

    const [todos, setTodos] = useState([])
    const todoRef = useRef()
    const handleAddTodo = (e) => {
        e.preventDefault()
        const description = todoRef.current.value;
        if (description === "") return;
        const newTodo = {
            id: uuid(),
            description,
            completed: false
        };
        setTodos((prevState) => [...prevState, newTodo])
        todoRef.current.value = null
    }

    return (
        <Container>
            <h1 className="text-center mt-4">Fancy Todo List</h1>
            <Form className="my-5"
            >
                <Row className="align-items-center justify-content-center text-capitalize">
                    <Form.Group className="col-12 col-lg-8">
                        <FloatingLabel controlId="floatingInput" label="Nueva Tarea">
                            <Form.Control ref={todoRef} type="text" placeholder="Ingrese descripción..." autoFocus />
                        </FloatingLabel>
                    </Form.Group>
                    <Button size="sm" variant="success" className="mt-4 w-50" onClick={handleAddTodo}>Agregar Tarea</Button>
                    <Button size="sm" variant="danger" className="m-2 w-50">Eliminar Finalizadas</Button>
                </Row>
            </Form>
            <Row className="text-center">
                <TodoList todos={todos} setTodos={setTodos} />
            </Row>

        </Container >
    )
}
export default App;

