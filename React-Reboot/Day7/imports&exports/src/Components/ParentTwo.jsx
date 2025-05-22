import React, { useEffect } from 'react'
import MiddleTwo from './MiddleTwo'

const ParentTwo = () => {
    useEffect(() => {
        console.log("Parent Two Mounted")
    }, [])
  return (
    <div>
        <h1>Parent Two</h1>
        <MiddleTwo />
    </div>
  )
}

export default ParentTwo