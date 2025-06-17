import {Routes, Route, Link} from "react-router-dom"
import A from "./Components/A"
import B from "./Components/B"
import C from "./Components/C"

const App = () => {
  return (
    <div>
      <div>
        <Link to={"/a"}>A</Link>
        <Link to={"/b"}>B</Link>
        <Link to={"/c"}>C</Link>
      </div>



      <Routes>
        <Route path="/a" element={<A />} />
        <Route path="/b" element={<B />} />
        <Route path="/c" element={<C />} />
      </Routes>
    </div>
  )
}

export default App