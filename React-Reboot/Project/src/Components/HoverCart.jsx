import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HoverCart = ({timeoutID, setter}) => {

    const cartSliceData = useSelector(store => store.cart)
    const[total, setTotal] = useState()
    // console.log(total)
    const nav = useNavigate()


    useEffect(() => {
        let ans = 0
        cartSliceData.data.map((item) => {
            ans += item.quantity * (item.defaultPrice / 100 || item.price / 100)
        })
        setTotal(ans)
    }, [])


  return (
    <div 
    onMouseLeave={() => {
        setter(false)
    }}
     onMouseEnter={() => {
        clearTimeout(timeoutID)
    }} className='h-fit bg-white shadow-2xl p-4 border-t-2 border-orange-500 absolute mt-2 right-[5vw]'>
        

    {cartSliceData.data.length > 0 &&  <div>
        {cartSliceData.data.map((item) => {
            // console.log(item)
            return (
                <div className='flex justify-between text-sm gap-3'>
                    <p>{item.name.length > 20 ? item.name.slice(0,20) + "..." : item.name} X {item.quantity} &nbsp;</p>
                    <span>{(item.defaultPrice / 100 || item.price / 100 )* item.quantity}</span>
                </div>
            )
        })}
    </div>}


    <hr className='border-dotted mt-3' />

    <div className='flex justify-between mt-4'>
        <div className='text-sm'>
            <h2 className='font-bold'>Sub total</h2>
            <p className='text-gray-700'>Extra charges may apply</p>
        </div>
        <p>₹{total}</p>
    </div>


    <button onClick={() => {
        nav("/cart")
    }} className='mt-4 bg-orange-500 w-[100%] py-3 text-white cursor-pointer'>CHECKOUT</button>





    </div>
  )
}

export default HoverCart