import logo from './logo.svg'
import SuperCounter from "./components/SuperCounter"
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <SuperCounter />
      </header>
    </div>
  )
}
export default App
