import Saludo from "./components/Saludo"
import { useState } from 'react'

function App() {
  const [nombre, setNombre] = useState("")

  function cambiaNombre(e) {
    setNombre(e.target.value)
  }
  return (
    <>
      <h1>Componente APP</h1>
      <input onChange={cambiaNombre} type="text" placeholder="Nombre..." />

      <Saludo nombre={nombre} />
    </>
  )
}

export default App
