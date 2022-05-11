//Aquí vemos el prop drilling, pasando el nombre de usuario hacia el fondo de nuestro árbol

import './App.css'

function App() {
  //estado fake
  const userName = "Juan Pérez"
  //App, renderiza Layout -> Header -> UserInfo y este componente es el que usa el estado (userName)

  return (
    <Layout userName={userName}>
      <p>Aquí va el contenido que pasamos al componente a través de la prop especial 'children'. Todo lo que vaya entre las etiquetas de apertura y cierre del componente, en este Layout, será capturado en Layout por la prop especial children</p>
    </Layout>
  )
}

//componentes
function Layout({ userName, children }) {
  return (
    <div>
      <main className='child'>
        <Header userName={userName} />
        {children}

      </main>
    </div>
  )
}

function Header({ userName }) {
  return (
    <header>
      <UserInfo userName={userName} />
    </header>
  )
}

function UserInfo({ userName }) {
  return <span style={{ fontWeight: '700', backgroundColor: 'burlywood', padding: '.2em', color: 'black' }}>User name is: {userName}</span>


}

export default App
