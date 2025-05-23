import {  Routes, Route, Link } from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Profile from './Components/Profile'

const App = () => {
  return (
  
      <div>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>

        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link  >



      </div>

  )
}
export default App