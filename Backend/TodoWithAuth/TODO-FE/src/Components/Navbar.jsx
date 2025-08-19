import React from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import{useSelector} from "react-redux"

const Navbar = () => {
    const nav = useNavigate()
    const data = useSelector(store => store.user)
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo / Title */}
      <div className="text-xl font-bold text-blue-600">Welcome, {data.firstName + " " + data.lastName}</div>
      {/* Navigation buttons */}
      <div className="flex gap-4">
        <button
        onClick={() => {
          nav("/")
        }}
         className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition">
          Home
        </button>
        <button
        onClick={() => {
          nav("/new")
        }}
        className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition">
          New
        </button>
        <button
            onClick={() => {
                async function logout()
                {
                    const res = await axios.post(`${import.meta.env.VITE_DOMAIN}/user/logout`, {} ,{withCredentials : true})
                    nav("/login")
                }
                logout()
            }}
        className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition">
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
