import {Routes, Route} from "react-router-dom"
import Landing from "./Components/Landing"
import Error from "./Components/Error"

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Landing />} path="/home" />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App