import { useState } from 'react'

const Form = () => {

    const[todos, setTodos] = useState([])

  return (
     <div className='w-[50vw] border h-[100vh]'>
            <div className='border w-[50%] mx-auto p-2 mt-[30vh] flex flex-col gap-2 rounded-2xl border-gray-400 bg-yellow-100'>
                <input className='bg-white border p-2 rounded-lg border-gray-400' type="text" placeholder='Enter task titile' />
                <textarea className='bg-white border p-2 rounded-lg border-gray-400' name="" id="" placeholder='Enter task description'></textarea>
                <button className='bg-green-300 w-[50%] mx-auto rounded-lg text-lg'>Add Task</button>
            </div>
        </div>
  )
}

export default Form