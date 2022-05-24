import './App.css'
import { Link, Outlet } from "react-router-dom"

function App() {

  return (
    <div>
      <h1>Finance Logger</h1>
      <nav>
        <Link to={"/invoices"}>Invoices</Link>
        <Link to={"/expenses"}>Expenses</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  )
}

export default App
