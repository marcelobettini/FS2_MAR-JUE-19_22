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
      <h3>texto</h3>
      {data.map((el) => <p key={el.id}>{el.id}</p>)}
      <button onClick={() => setEndpoint("posts")}>posts</button>
      <button onClick={() => setEndpoint("users")}>users</button>
      <button onClick={() => setEndpoint("comments")}>comments</button>
    </>
  )
}
export default App
