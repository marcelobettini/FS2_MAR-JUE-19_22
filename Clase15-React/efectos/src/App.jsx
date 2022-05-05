import { useEffect, useState } from "react"
import { Container, Row, Button } from "react-bootstrap";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";


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
            {endpoint === "users" && data.map(el => <Users key={el.id} el={el} />)}
            {endpoint === "posts" && data.map(el => <Posts key={el.id} el={el} />)}
            {endpoint === "comments" && data.map(el => <Comments key={el.id} el={el} />)}
          </section>
        </Row>
      </Container>
    </>
  )
}
export default App
