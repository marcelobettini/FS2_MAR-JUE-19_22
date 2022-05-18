import './App.css'
import PokemonFilter from './components/PokemonFilter'
import PokemonTable from './components/PokemonTable'
import PokemonInfo from './components/PokemonInfo'
function App() {
  return (
    <div style={{ margin: "auto", display: "flex", flexDirection: "column", width: '60vw' }}>
      <h1>Pokemon Finder</h1>
      <PokemonFilter />
      <div style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        gap: "1.5rem"
      }}>


        <PokemonTable />
        <PokemonInfo />
      </div>
    </div>

  )
}
export default App
