import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'

const Comments = () => {
  const[data, setData] = useState([])
  const[showLoader, setShowLoader] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      async function getData()
      {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await res.json()
        setData(data)
        setShowLoader(false)
      }
      getData()
    }, 3000)
  }, [])
  return showLoader ? <Shimmer /> : (
    <div>
      {data.length > 0 && data.map((item) => {
        return (
          <div className='border p-4 mt-2 bg-blue-100' key={item.id}>
            <p>{item.body}</p>
            <p>{item.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Comments