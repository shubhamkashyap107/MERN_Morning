import React, { useEffect } from 'react'

const One = () => {


    useEffect(() => {
        console.log("One comp mounted")


        return () => {
            console.log("One Comp Unmounted")
        }
    }, [])

  return (
    <div>One</div>
  )
}

export default One