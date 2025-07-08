import { useNavigate } from "react-router-dom"
import navLogo from "../assets/navlogo.svg"
import { useEffect, useState } from "react"
import { useGlobalContext } from "../Utils/GlobalContext"
import HoverCart from "./HoverCart"

const Navbar = () => {

  const nav = useNavigate()
  const[place, setPlace] = useState("My Address")
  const{lat,long} = useGlobalContext()
  const[showCart, setShowCart] = useState(false)
  const[timeoutID, setTimeoutID] = useState("")

  useEffect(() => {
    async function  getLocation() {
      if(!lat || !long)return
      try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`)
          const data = await res.json()
          // console.log(data)
          setPlace(data.display_name)
      } catch (error) {
        console.log(error)
      }

    }
    getLocation()
  }, [lat, long])

  return (
    <>
    <div className="bg-white flex justify-between items-center shadow-lg px-20 py-2 relative">
        <div className="flex items-center gap-5 ">

            <img onClick={() => {
              nav("/")
            }} src={navLogo} alt="" />
            <p className="hover:text-orange-400 hover:cursor-pointer"><span className="underline">Other</span> &nbsp; {place && place.length > 20 ? place.slice(0,30) : place}...</p>

        </div>

        <div className="flex gap-5">

            <button onClick={() => {
              nav("/search")
            }} className="hover:cursor-pointer"><i className="fa-solid fa-magnifying-glass"></i>&nbsp;Search</button>
            <button onClick={() => {
              nav("/help")
            }} className="hover:cursor-pointer"><i className="fa-solid fa-question"></i>&nbsp;Help</button>
            <button className="hover:cursor-pointer"><i className="fa-solid fa-user"></i>&nbsp;Sign In</button>
            <button
            onClick={() => {
              nav("/cart")
            }}
              onMouseLeave={() => {
                const idOfHover = setTimeout(() => {
                  setShowCart(false)
                }, 3000)
                setTimeoutID(idOfHover)
              }}
             onMouseEnter={() => {
              setShowCart(true)
            }} className="hover:cursor-pointer"><i className="fa-solid fa-cart-shopping"></i>&nbsp;Cart</button>
        </div>
    </div>

    {showCart && <HoverCart timeoutID={timeoutID} setter={setShowCart} />}
    </>

  )
}

export default Navbar