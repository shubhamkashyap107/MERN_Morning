import React, { useEffect, useState } from 'react'

const Todos = () => {

  const[data, setData] = useState([])

  useEffect(() => {
    async function getData()
    {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await res.json()
      setData(data)
      // console.log(data)
    }
    getData()
  }, [])
  return (
    <div>
      {data.length > 0 && data.map((item) => {
        console.log(item.completed)
        return (
          <div key={item.id} className='border p-4 mt-3'>
            <p>{item.title}</p>
            <p>{`${item.completed}`}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Todos