import React from 'react'
import {Routes, Route, Link} from "react-router-dom"
import One from './Components/One'
import Two from './Components/Two'
import Three from './Components/Three'
import Navbar from './Components/Navbar'
import "./index.css"

const App = () => {
  return (
    <div>

    <Navbar />


      <Routes>
        <Route element={<One />} path='/' />
        <Route element={<One />} path='/one' />
        <Route element={<Two />} path='/two' />
        <Route element={<Three />} path='/three' />
      </Routes>
    </div>
  )
}

export default App