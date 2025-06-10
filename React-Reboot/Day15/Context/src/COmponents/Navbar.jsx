import React from 'react'
import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='bg-black text-white flex justify-between p-4'>
      <h1>LOGO</h1>
      <div className='flex gap-2'>

        {/* <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/profile"}>Profile</Link> */}

        <NavLink className={({isActive}) => {
          return isActive == true ? "text-yellow-500" : ""
        }} to={"/home"}>Home</NavLink>

        <NavLink className={({isActive}) => {
          return isActive == true ? "text-yellow-500" : ""
        }} to={"/about"}>About</NavLink>

        <NavLink className={({isActive}) => isActive ? "text-yellow-500" : ""} to={"/profile"}>Profile</NavLink>
      </div>
    </div>
  )
}

export default Navbar