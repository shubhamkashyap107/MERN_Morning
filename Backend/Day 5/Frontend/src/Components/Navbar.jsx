import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-900 text-white px-6 py-4 shadow-md">
      <h3 className="text-xl font-bold tracking-wide">LOGO</h3>
      <div className="space-x-6">
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
        {/* <Link 
          to="/edit" 
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          Edit
        </Link> */}
      </div>
    </nav>
  )
}

export default Navbar
