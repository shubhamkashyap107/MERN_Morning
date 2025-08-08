import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import New from './components/New'
import Edit from './components/Edit'

const App = () => {
  return (
    <div>
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App