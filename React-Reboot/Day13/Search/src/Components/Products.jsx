import React, { useEffect, useState } from 'react'

const Products = () => {

    const[products, setProducts] = useState([])
    const[originalData, setOriginalData] = useState([])
    // const[query, setQuery] = useState("")
    // console.log(products)

    useEffect(() => {
        async function getData()
        {
            const res = await fetch("https://dummyjson.com/products")
            const data = await res.json()
            setProducts(data.products)
            setOriginalData(data.products)
        }
        getData()
    }, [])

  return (
<>
    <input onChange={(e) => {
        // setQuery(e.target.value)
        const filteredArray = originalData.filter((item) => {
            // return item.title.includes(query) ❌
            return item.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        // console.log(filteredArray)
        setProducts(filteredArray)
    }} type="text" className='border h-[40px] w-[20vw] rounded m-4' /> 

    <div className='grid grid-cols-4 gap-2'>
        {products.length > 0 && products.map((item) => {
            return (
                <div className='border w-[300px] flex flex-col items-center'>
                    <img className='h-[300px]' src={item.images[0]} alt="" />
                    <h2>{item.title}</h2>
                    <span>${item.price}</span>
                </div>
            )
        })}
    </div>
    
    
</>
  )
}

export default Products