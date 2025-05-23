import React, { useEffect } from 'react'

const Two = () => {

    useEffect(() => {
        console.log("Two comp mounted")


        return () => {
            console.log("Two Comp Unmounted")
        }
    }, [])
    
  return (
    <div>Two</div>
  )
}

export default Two