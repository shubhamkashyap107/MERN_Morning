import { useState } from "react"

function Greet()
{
    const[naam, setNaam] = useState("")
    // console.log(naam)
    return (
        <>
        <input onChange={(e) => {
           setNaam(e.target.value)
        }} type="text" />
        {naam && <h3>Hello my name is {naam}</h3>} 
        </>
    )
}


export default Greet