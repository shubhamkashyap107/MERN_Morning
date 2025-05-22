import React, { useEffect } from 'react'

const ChildTwo = () => {
    useEffect(() => {
        console.log("Child Two Mounted")
    }, [])
  return (
    <h1>ChildTwo</h1>
  )
}

export default ChildTwo