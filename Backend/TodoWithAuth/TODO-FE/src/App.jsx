import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Components/Auth'
import Login from './Components/Login'

const App = () => {
  return (

    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewTask />} /> */}
    </Routes>

  )
}

export default App