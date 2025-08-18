import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Components/Auth'
import Login from './Components/Login'
import  toast, { Toaster } from 'react-hot-toast';
import Home from './Components/Home';
import ProtectedRoutes from './Components/ProtectedRoutes';

const App = () => {


  return (
    <>
    <Toaster />
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      <Route path='/' element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />

      </Route>
      {/* <Route path="/new" element={<NewTask />} /> */}
    </Routes>
    </>

  )
}

export default App