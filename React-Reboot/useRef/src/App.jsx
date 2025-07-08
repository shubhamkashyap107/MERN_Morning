// import React, { useRef, useState } from 'react'

// const App = () => {
//   const inputRef = useRef(null)
//   const[data, setData] = useState("")
//   const inputRef2 = useRef()
//   return (
//     <div>
//       <input onChange={(e) => {
//         setData(e.target.value)
//       }} ref={inputRef} type="text" />

//       <input type="text" onChange={(e) => {
//         inputRef2.current = e.target.value
//       }} />

//       <button onClick={() => {
//         console.log(inputRef)
//         inputRef.current.focus()
//       }}>Click Me</button>


//       <div>{inputRef2.current}</div>
//       <div>{data}</div>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import A from './Components/A'
import B from './Components/B'

const App = () => {
  return (
    <div>

      <Link to={"/a#any"} >A</Link>
      <Link to={"/b"} >B</Link>

      <br />
      
      <a href="/a#any">AA</a>
      <a href="/b">BB</a>


      <Routes>
        <Route path='/a' element={<A />} />
        <Route path='/b' element={<B />} />
      </Routes>



    </div>
  )
}

export default App