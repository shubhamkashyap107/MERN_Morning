import React, { useEffect } from 'react'
import Child from './Child'

const Middle = () => {


     useEffect(() => {
            console.log("Middle Comp Mounted")
        }, [])



  return (
    <div>
        <h1>Middle</h1>
        <Child />
    </div>
  )
}

export default Middle