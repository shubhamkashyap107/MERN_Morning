import React from 'react'
import {Link, Route, Routes} from "react-router-dom"
import Products from './Components/Products'
import User from './Components/User'

const App = () => {
  return (
    <div>
      <div className='bg-black text-white flex justify-between p-4'>
        <h3>LOGO</h3>



        <div>
          <Link className='m-2' to={"/products"}>Products</Link>
          <Link className='m-2' to={"/users"}>Users</Link>
        </div>
      </div>


      <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='/users' element={<User />} />
      </Routes>


    </div>
  )
}

export default App