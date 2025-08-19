import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Components/Auth'
import Login from './Components/Login'
import  toast, { Toaster } from 'react-hot-toast';
import Home from './Components/Home';
import ProtectedRoutes from './Components/ProtectedRoutes';
import New from './Components/New';
import Edit from './Components/Edit';

const App = () => {


  return (
    <>
    <Toaster />
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      <Route path='/' element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/edit/:id' element={<Edit />} />

      </Route>
    </Routes>
    </>

  )
}

export default App