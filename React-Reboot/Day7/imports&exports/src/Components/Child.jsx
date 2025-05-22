import React, { useEffect } from 'react'

const Child = () => {
     useEffect(() => {
            console.log("Child Comp Mounted")
        }, [])
  return (
    <h1>Child</h1>
  )
}

export default Child