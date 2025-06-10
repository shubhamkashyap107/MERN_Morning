import { Routes, Route } from "react-router-dom"
import About from './COmponents/About'
import Home from './COmponents/Home'
import Profile from './COmponents/Profile'
import Navbar from './COmponents/Navbar'
import { useNavigate } from "react-router-dom"

const App = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
{/* 

      <button onClick={() => {
          navigate("/home")
      }}>Home</button>
      <button onClick={() => {
          navigate("/profile")
      }}>Profile</button>
      <button onClick={() => {
        navigate("/about")
      }}>About</button> */}
    </div>
  )
}

export default App