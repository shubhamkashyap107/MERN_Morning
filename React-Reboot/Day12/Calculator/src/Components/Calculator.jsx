import React, { useState } from 'react'

const Calculator = () => {

    const[exp, setExp] = useState("")

    const btnClickHandler = (e) => {
        setExp(exp + e.target.innerText)
    }

    const clearBtnHandler = () => {
        setExp("")
    }

    const equalBtnHandler = () => {
        try {
            const res = eval(exp)
            setExp(res)  
        } catch (error) {
            setExp("Invalid Input")
        }

    }

  return (
    <div className='flex h-[100vh] items-center bg-black'>
        <div className='border h-fit w-[30vw] mx-auto flex flex-col items-center '>

            <input disabled value={exp} type="text" className='w-[80%] outline-none mb-5 h-16 text-right px-4 text-6xl text-white' placeholder='0' />

            <div className='grid grid-cols-4 w-[80%] mx-auto gap-2'>
                <button onClick={clearBtnHandler} className='text-2xl bg-gray-300 h-16 w-16 rounded-full'>C</button>
                <button onClick={btnClickHandler} className='text-2xl bg-gray-300 h-16 w-16 rounded-full'>**</button>
                <button onClick={btnClickHandler} className='text-2xl bg-gray-300 h-16 w-16 rounded-full'>%</button>
                <button onClick={btnClickHandler} className='text-2xl bg-yellow-500 text-white border-none border h-16 w-16 rounded-full'>/</button>

                <button onClick={btnClickHandler} className='text-2xl bg-gray-500 text-white h-16 w-16 rounded-full'>7</button>
                <button onClick={btnClickHandler} className='text-2xl bg-gray-500 text-white h-16 w-16 rounded-full'>8</button>
                <button onClick={btnClickHandler} className='text-2xl bg-gray-500 text-white h-16 w-16 rounded-full'>9</button>
                <button onClick={btnClickHandler} className='text-2xl bg-yellow-500 text-white border-none border h-16 w-16 rounded-full'>*</button>

                <button onClick={btnClickHandler} className='text-2xl bg-gray-500 text-white h-16 w-16 rounded-full'>4</button>
                <button onClick={btnClickHandler} className='text-2xl bg-gray-500 text-white h-16 w-16 rounded-full'>5</button>
                <button onClick={btnClickHandler} className='text-2xl bg-gray-500 text-white h-16 w-16 rounded-full'>6</button>
                <button onClick={btnClickHandler} className='text-2xl bg-yellow-500 text-white border-none border h-16 w-16 rounded-full'>-</button>

                <button onClick={btnClickHandler} className='text-2xl bg-gray-500 text-white h-16 w-16 rounded-full'>1</button>
                <button onClick={btnClickHandler} className='text-2xl bg-gray-500 text-white h-16 w-16 rounded-full'>2</button>
                <button onClick={btnClickHandler} className='text-2xl bg-gray-500 text-white h-16 w-16 rounded-full'>3</button>
                <button onClick={btnClickHandler} className='text-2xl bg-yellow-500 text-white border-none border h-16 w-16 rounded-full'>+</button>

                <button onClick={btnClickHandler} className='text-2xl bg-gray-500 col-span-2 text-white text-left px-6 h-16 rounded-full'>0</button>
                <button onClick={btnClickHandler} className='text-2xl bg-gray-500 text-white h-16 w-16 rounded-full'>.</button>
                <button onClick={equalBtnHandler} className='text-2xl bg-yellow-500 text-white border-none border h-16 w-16 rounded-full'>=</button>
            </div>
        </div>
    </div>
  )
}

export default Calculator