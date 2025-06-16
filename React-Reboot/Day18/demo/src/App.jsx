
import {Routes, Route, Link} from "react-router-dom"
import Home from "./COmponents/Home"
import Profile from "./COmponents/Profile"


const App = () => {
  return (

    <>
    <div className="bg-black flex justify-between p-4 text-white text-lg">
      <h2>LOGO</h2>
      <div className="flex gap-2">
        <Link to="/home">Home</Link>
        {/* <Link to="/profile">Profile</Link> */}
      </div>
    </div>

    <div>
      <Routes>
        <Route path="/" element={<Home/ >} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/profile" element={<Profile />} />  */}
        <Route path="/profile/:id" element={<Profile />} /> 
        <Route path="*" element={<>Page not found</>} />
      </Routes>
    </div>
    </>
  )
}

export default App