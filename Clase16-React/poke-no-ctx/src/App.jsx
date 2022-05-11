import { useState, useEffect } from 'react'
import './App.css'
import PokemonRow from './components/PokemonRow'
import PokemonFilter from './components/PokemonFilter'
import PokemonInfo from './components/PokemonInfo'

function App() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState("")
  const [selectedPokemon, setSelectedPokemon] = useState(null)


  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then(res => res.json())
      .then(info => {
        setData(info)
        console.log(data)
      })
  }, [])
  if (!data) return <div>Loading...</div>
  return (
    <div
      style={{ margin: "auto", width: 800, paddingTop: "1em" }}
    >
      <h1>Pokemon Finder</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "80% 20%",
        gridColumnsGap: "3rem"
      }}>
        <div>
          <PokemonFilter filter={filter} setFilter={setFilter} />
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>

              {data.filter(({ name: { english } }) => english.toLowerCase().startsWith(filter.toLowerCase()))
                .slice(0, 16)
                .map(pokemon => <PokemonRow
                  key={pokemon.id}
                  pokemon={pokemon}
                  onDetail={(pokemon) => setSelectedPokemon(pokemon)}
                />
                  // onDetail es un evento custom, cuando el evento "onDetail"  es llamado por el evento onClick desata la actualización del estado selectedPokemon
                )}
            </tbody>
          </table>
        </div>
        {/* solo si hay un selectedPokemon vamos a renderizar el componente */}
        {selectedPokemon && <PokemonInfo {...selectedPokemon} />}
      </div>
    </div>
  )
}

export default App
