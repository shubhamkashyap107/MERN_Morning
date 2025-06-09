import React, { createContext, useState } from 'react'
import B from './B'

export const dataContext = createContext()
const A = () => {
  const[val, setVal] = useState("")
  return (
    <dataContext.Provider value={{myStr : val, naam : "Shubham"}}>

    <div>
      <input value={val} onChange={(e) => {
        setVal(e.target.value)
      }} type='text' />

      {/* <B val={val} /> */}
      <B />
    </div>
    </dataContext.Provider>

  )
}

export default A