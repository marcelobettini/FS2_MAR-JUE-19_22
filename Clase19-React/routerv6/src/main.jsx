import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App'
import Expenses from './routes/Expenses'
import Invoices from './routes/Invoices'
import Invoice from './routes/Invoice'
import ProtectedRoute from "./auth/ProtectedRoute"
import Protected from "./routes/Protected"
import SignIn from "./routes/SignIn"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/expenses' element={<Expenses />}></Route>
          <Route path='/invoices' element={<Invoices />}>
            <Route index element={<p style={{ marginLeft: '1em' }}>Select an invoice</p>} />
            <Route path=':invoiceNumber' element={<Invoice />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path='/protected' element={<Protected />} />
          </Route>
          <Route path='/signin' element={<SignIn />} />
          <Route path='*' element={<div><p>Not Found 😣</p></div>} />
        </Route>

      </Routes>

    </BrowserRouter>
  </React.StrictMode>
)
