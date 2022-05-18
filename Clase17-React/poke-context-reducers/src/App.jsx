import { useEffect, useReducer } from 'react'
import pokemonReducer from './pokemonReducer'
import './App.css'
import PokemonFilter from './components/PokemonFilter'
import PokemonTable from './components/PokemonTable'
import PokemonInfo from './components/PokemonInfo'
import pokemonContext from './pokemonContext'
function App() {
  console.log("App rendered")
  const [state, dispatch] = useReducer(pokemonReducer, { data: [], filter: "", selectedPokemon: null })

  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then(res => res.json())
      .then(info => {
        dispatch({
          type: 'SET_DATA',
          payload: info
        })
      })
  }, [])
  if (!state.data) return <div>Loading...</div>
  return (
    <pokemonContext.Provider value={{ state, dispatch }}>
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
    </pokemonContext.Provider>
  )
}
export default App
