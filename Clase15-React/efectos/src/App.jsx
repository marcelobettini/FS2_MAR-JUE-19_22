import { useEffect, useState } from "react"
import { Container, Row, Button } from "react-bootstrap";

function App() {
  const BASE = "https://jsonplaceholder.typicode.com/"
  const [data, setData] = useState([])
  const [endpoint, setEndpoint] = useState("posts")

  useEffect(() => {
    fetch(BASE + endpoint)
      .then(res => res.json())
      .then(json => setData(json))
  }, [endpoint])
  return (
    <>
      <Container>
        <h2 className="text-center"> Este es el componente Tabs</h2>
        <Row className="justify-content-center">
          <Button
            className="btn  btn-success my-1 w-25"
            onClick={() => setEndpoint("posts")}
          >
            posts
          </Button>
          <Button
            className="btn  btn-warning my-1 w-25"
            onClick={() => setEndpoint("comments")}
          >
            comments
          </Button>
          <Button
            className="btn  btn-primary my-1 w-25"
            onClick={() => setEndpoint("users")}
          >
            users
          </Button>
          <section>
            {endpoint === "users" &&
              data.map((el) => {
                return (
                  <div key={el.id} className="fw-bold">
                    <p>Name: <span className="fw-normal">{el.name}</span></p>
                    <p>Email: <span className="fw-normal">{el.email}</span></p>
                    <p>Username: <span className="fw-normal">{el.username}</span></p>
                    <hr />
                  </div>
                )
              })}
            {
              endpoint === "posts" &&
              data.map((el) => {
                return (
                  <div key={el.id}>
                    <h4>{el.title}</h4>
                    <p>{el.body}</p>
                    <hr />
                  </div>
                )
              })
            }
            {
              endpoint === "comments" &&
              data.map((el) => {
                return (
                  <div key={el.id}>
                    <h4 className="mb-3">{el.name}</h4>
                    <span className="border border-1 border-dark rounded p-1"> <span className="bg-dark text-white pe-1"> Comment by </span><span className="text-danger ps-1">{el.email}</span></span>
                    <p className="mt-3">{el.body}</p>
                    <hr />
                  </div>
                )
              })
            }
          </section>
        </Row>
      </Container>
    </>
  )
}
export default App
