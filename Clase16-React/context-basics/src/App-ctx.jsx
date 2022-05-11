//En esta versión migramos nuestro esquema para usar Context y evitar el prop-drilling
import './App.css'

import { createContext, useContext } from 'react';
const UserCtx = createContext("user unknown")

function App() {
  //estado fake
  const userName = "Cristina Pérez"
  //App, renderiza Layout -> Header -> UserInfo y este componente es el que usa el estado (userName)

  return (
    <UserCtx.Provider value={userName}>
      <Layout  >
        <p>Aquí va el contenido que pasamos al componente a través de la prop especial 'children'. Todo lo que vaya entre las etiquetas de apertura y cierre del componente, en este Layout, será capturado en Layout por la prop especial children</p>
      </Layout>
    </UserCtx.Provider>
  )
}

//componentes
function Layout({ children }) {
  return (
    <div>
      <main className='child'>
        <Header />
        {children}

      </main>
    </div>
  )
}

function Header() {
  return (
    <header>
      <UserInfo />
    </header>
  )
}

function UserInfo() {
  //este es el único componente que necesita el contexto
  const userName = useContext(UserCtx)
  return <span style={{ fontWeight: '700', backgroundColor: 'burlywood', padding: '.2em', color: 'black' }}>User name is: {userName}</span>


}

export default App
