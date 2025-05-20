import React, { useState } from 'react'

const Demo = () => {
    const[count, setCount] = useState()
    const[apiData, setApiData] = useState()
    const[currImage, setCurrImage] = useState()
    const[name, setName] = useState()
    


  return (
    <div>


        <input type="text" onChange={(e) => {
            setName(e.target.value)
        }} />
        <p>hello my name is {name}</p>
        
    </div>
  )
}

export default Demo