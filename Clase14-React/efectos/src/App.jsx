import { useEffect, useState } from "react"

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
      {/* elaborar un render condicional, de acuerdo al tipo de recurso que llega desde la API (recuerden, posts, users y comments no comparten las mismas propiedades, a excepción del id. Entonces, de acuerdo al endpoint será el render)
      Si no pueden utilizar un if de forma directa en el código jsx, pueden hacerlo por vía oblicua con un operador lógico...
      😎 */}
      <h3>Botones</h3>
      <button onClick={() => setEndpoint("posts")}>posts</button>
      <button onClick={() => setEndpoint("users")}>users</button>
      <button onClick={() => setEndpoint("comments")}>comments</button>
      <h3>Resultado</h3>
      {endpoint === "posts" && data.map((el) => <p key={el.id}>{el.title}</p>)}
      {endpoint === "comments" && data.map((el) => <p key={el.id}>{el.name}</p>)}
      {endpoint === "users" && data.map((el) => <p key={el.id}>{el.email}</p>)}
    </>
  )
}
export default App
