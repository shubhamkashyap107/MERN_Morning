import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import Todos from './Components/Todos'
import Comments from './Components/Comments'
import Error from "./Components/Error"
import Shimmer from './Components/Shimmer'
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route element={<Products />} path='/products' />
        <Route element={<Todos />} path='/todos' />
        <Route element={<Comments />} path='/comments' />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App