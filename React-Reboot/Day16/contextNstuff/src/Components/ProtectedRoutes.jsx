import React from 'react'
import {Navigate, Outlet} from "react-router-dom"
import { useUserDataContext } from '../Utils/UserDataContext'

const ProtectedRoutes = () => {
    const{username, password} = useUserDataContext()
    const isAuthenticated = username == "admin" && password == "12345678"
  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />
}

export default ProtectedRoutes