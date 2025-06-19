import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (

    
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FF5200] text-white px-6">
      <h1 className="text-7xl font-extrabold">404</h1>
      <p className="text-2xl font-semibold mt-4">Oops! Page Not Found</p>
      <p className="text-white/90 mt-2 max-w-md text-center">
        Looks like you're lost. Let’s get you back to the home page.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block bg-white text-[#fc8019] text-sm font-semibold px-6 py-3 rounded-full shadow hover:bg-orange-100 transition"
      >
        Go to Homepage →
      </Link>

      <div className="mt-10 text-5xl">🍽️🥡</div>
    </div>
  )
}

export default NotFound
