import React, { useEffect } from 'react'
import Middle from './Middle'

const Parent = () => {

    useEffect(() => {
        console.log("Parent Comp Mounted")
    }, [])

  return (
    <div>
        <h1>Parent</h1>
        <Middle />
    </div>
  )
}

export default Parent