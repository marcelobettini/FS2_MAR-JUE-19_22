
import React, { Suspense } from 'react'
import './App.css'
// import Holgazan from '../Holgazan'
const LazyHolgazan = React.lazy(() => import('./Holgazan'))

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHolgazan />
      </Suspense>
    </>

  )
}

export default App
