import React, { useEffect, useState } from "react"
import './App.css';

function App() {
  const [poke, setPoke] = useState([])
  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setPoke(data))
  }, [])
  return (
    <>
      Mi aplicación de React con un servidor Node Js... suaaaave

      <ul>
        {poke.map((p) => <li key={p.id}>{p.name.japanese}</li>)}
      </ul>

    </>
  );
}

export default App;
