import React, { useEffect } from 'react'

const Three = () => {

    useEffect(() => {
        const id = setInterval(() => {
            console.log("This is a set interval")
        }, 2000)


        return () => {
            clearInterval(id)
        }
    }, [])

  return (
    <div>Three</div>
  )
}

export default Three