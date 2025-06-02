import React, { useEffect, useState } from 'react'
import Loader from "./Loader"

const Products = () => {

  const[data, setData] = useState([])
  const[showLoader, setShowLoader] = useState(true)
  // console.log(data)

  useEffect(() => {
    setTimeout(() => {
    async function getData()
    {
      const res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json()
      setData(data)
      setShowLoader(false)
    }
    getData()
    }, 4000)
  }, [])


  return showLoader == true ? <Loader /> : (
    <div className='grid grid-cols-4'>
      {data.length > 0 && data.map((item) => {
        return (
          <div className='border p-2 w-[350px]' key={item.id}>
            <img className='w-[300px] h-[300px]' src={item.image} alt="" />
            <p>{item.price}</p>
          </div>
        )
      })}
    </div>
  )

}

export default Products