import React, { useEffect } from 'react'
import ChildTwo from './ChildTwo'

const MiddleTwo = () => {
    useEffect(() => {
        console.log("Middle Two Mounted")
    }, [])
  return (
    <div>
        <h1>Middle Two</h1>
        <ChildTwo />
    </div>
  )
}

export default MiddleTwo