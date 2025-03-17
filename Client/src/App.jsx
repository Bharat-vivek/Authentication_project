import { useState } from 'react'
import 'bootstrap/dist/bootstrap/css/bootstrap.min.css'
import Signup from './Signup'
import { BrowserRouter, Route, Router } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='./register' element={<Signup />}> </Route>
        <Route path='./login ' element={<Login />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
