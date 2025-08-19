import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addTask } from '../Utils/UserSlice'

const New = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const nav = useNavigate()
  const dispatch = useDispatch()

 function handleAdd()
 {
    async function at() {
        if(!title.length || !desc.length)
        {
            return 
        }
        const res = await axios.post(`${import.meta.env.VITE_DOMAIN}/todos`,{title, desc, isCompleted : false}, {withCredentials : true})
        console.log(res)
        dispatch(addTask(res.data.data))
        if(res.status == 200)
        {
            nav("/")
        }
    }
    at()
 }

  return (
    <>
        <Navbar />
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-2xl mt-30">
      <h2 className="text-xl font-semibold mb-3">Add New Todo</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded-lg p-2 mb-3 bg-white"
      />

      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="w-full border rounded-lg p-2 mb-3 bg-white"
        rows="3"
      />

      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Add Todo
      </button>
    </div>
    </>

  )
}

export default New
