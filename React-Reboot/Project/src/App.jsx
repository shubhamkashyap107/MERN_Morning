import {Routes, Route} from "react-router-dom"
import Landing from "./Components/Landing"
import Error from "./Components/Error"
import Restaurant from "./Components/Restaurant"
import { useEffect, useState } from "react"
import { useGlobalContext } from "./Utils/GlobalContext"

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
        <Route element={<Restaurant />} path="/restaurants" />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App