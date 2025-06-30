import {Routes, Route} from "react-router-dom"
import Landing from "./Components/Landing"
import Error from "./Components/Error"
import Restaurant from "./Components/Restaurant"
import { useGlobalContext } from "./Utils/GlobalContext"
import SliderItemData from "./Components/SliderItemData"
import Menu from "./Components/Menu"
import Search from "./Components/Search"

const App = () => {

  const{setLat, setLong} = useGlobalContext()
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords?.latitude
        const long = position.coords?.longitude
        setLat(lat)
        setLong(long)
    })
  return (
    <div>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Landing />} path="/home" />
        <Route element={<Search />} path="/search" />
        <Route element={<Restaurant />} path="/restaurants" />
        <Route element={<Menu />} path="/menu/:resId" />
        <Route element={<SliderItemData />} path="/slider-data/:itemId/:text" />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App