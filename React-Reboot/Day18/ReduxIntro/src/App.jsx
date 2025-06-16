import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addData } from './Utils/dataSlice'

const App = () => {
  const[text,setText] = useState("")
  const dispatch = useDispatch()
  return (
    <div>
      <input type="text" onChange={(e) => {
        setText(e.target.value)
      }} />

      <button onClick={() => {
        dispatch(addData(text))
      }}>Add Data</button>
    </div>
  )
}

export default App