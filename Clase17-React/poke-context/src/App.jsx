import { useState, useEffect } from 'react'
import './App.css'
import PokemonFilter from './components/PokemonFilter'
import PokemonTable from './components/PokemonTable'
import PokemonInfo from './components/PokemonInfo'
import PokemonContext from './PokemonContext'
function App() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState("")
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then(res => res.json())
      .then(info => {
        setData(info)
      })
  }, [])
  if (!data) return <div>Loading...</div>
  return (
    <PokemonContext.Provider value={
      { data, setData, filter, setFilter, selectedPokemon, setSelectedPokemon }
    }>
      <div style={{ margin: "auto", display: "flex", flexDirection: "column", width: '60vw' }}>
        <h1>Pokemon Finder</h1>
        <div style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
          alignItems: 'center',
          gap: "1.5rem"
        }}>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </div>
      </div>
    </PokemonContext.Provider>
  )
}
export default App
