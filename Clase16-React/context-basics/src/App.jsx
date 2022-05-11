//EL hook Context es stateless, no provee un método dedicado para actualizar el estado. Si queremos cambiar el estado desde alguno de los consumers, necesitamos implementar un método para administrarlo

import './App.css'

import { createContext, useContext, useState } from 'react';
const UserCtx = createContext({
  userName: null,
  setUserName: () => { }
})


function App() {

  const [userName, setUserName] = useState('Pedro el negro')
  const value = { userName, setUserName }

  //App, renderiza Layout -> Header -> UserInfo y este componente es el que usa el estado (userName)

  return (
    <UserCtx.Provider value={value}>
      <>
        <UserInfo></UserInfo>
        <UserNameInput></UserNameInput>
      </>
    </UserCtx.Provider>
  )
}

//componentes
function UserNameInput() {
  const { userName, setUserName } = useContext(UserCtx)
  const handleChange = e => setUserName(e.target.value)
  return (
    <input type="text" onChange={handleChange} />
  )
}

function UserInfo() {
  //este es el único componente que necesita el contexto
  const { userName } = useContext(UserCtx)
  return <span style={{ fontWeight: '700', backgroundColor: 'burlywood', padding: '.2em', color: 'black' }}>User name is: {userName}</span>
}

export default App
