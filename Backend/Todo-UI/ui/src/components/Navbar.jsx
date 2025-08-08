import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      {/* Logo */}
      <h3 className="text-2xl font-bold tracking-wide cursor-pointer">
        LOGO
      </h3>

      {/* Navigation Links */}
      <div className="flex gap-6">
        <Link 
          to="/" 
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          Home
        </Link>
        <Link 
          to="/new" 
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          New
        </Link>


      </div>
    </nav>
  )
}

export default Navbar
