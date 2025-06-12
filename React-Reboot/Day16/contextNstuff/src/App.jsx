import React from 'react'
import {Routes, Route, Link} from "react-router-dom"
import Login from './Components/Login'
import Home from './Components/Home'
import Profile from './Components/Profile'
import About from './Components/About'
import ProtectedRoutes from './Components/ProtectedRoutes'

const App = () => {
  return (
    <div>

      <div className='bg-black flex justify-between text-white p-4'>
        <h3>LOGO</h3>


        <div className='flex gap-4'>
          <Link to={"/login"}>Login</Link>
          <Link to={"/home"}>Home</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/about"}>About</Link>
        </div>
      </div>

      <Routes>
        <Route element={<Login />} path='/login' />
        <Route path='/' element={<ProtectedRoutes />}>
        
                <Route element={<Home />} path='/home' />
                <Route element={<Profile />} path='/profile' />
                <Route element={<About />} path='/about' />
        </Route>

      </Routes>
    </div>
  )
}

export default App