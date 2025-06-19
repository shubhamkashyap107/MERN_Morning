import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addData } from '../Utils/userSlice'

const A = () => {
    const[name, setName] = useState("")
    const[pass, setPass] = useState("")
    const dispatch = useDispatch()


    function setter(setterFn,val)
    {
        setterFn(val)
    }

  return (
    <div>
        <input onChange={(e) => {
            // setName(e.target.value)
            setter(setName, e.target.value)
        }} type="text" />
        <input onChange={(e) => {
            // setPass(e.target.value)
            setter(setPass, e.target.value)
        }} type="text" />
        <button onClick={() => {
            if(!name || !pass) return
            dispatch(addData({name, pass}))
        }}>Add Data</button>
    </div>
  )
}

export default A