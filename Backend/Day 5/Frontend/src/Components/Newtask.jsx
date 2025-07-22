import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Newtask = () => {
    const[title, setTitle] = useState("")
    const[desc, setDesc] = useState("")
    const nav = useNavigate()
  return (
    <div className='flex justify-center items-center h-[100vh]'>
        <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4 w-[40vw]">
          <h2 className="text-xl font-semibold text-gray-700">Add a Task</h2>
          <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
            type="text"
            placeholder="Title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value)
          }}
            placeholder="Description"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
          <button onClick={() => {
            if(title == "" || desc == "")return
            async function sendData() {
                const res = await fetch("http://localhost:8080/api/todos",
                {
                method : "POST",
                body : JSON.stringify({title : title, desc : desc}),
                headers : {
                    "Content-Type": "application/json",
                }
                })
                const data = await res.json()
                setTitle("")
                setDesc("")
                nav("/")
            }
            sendData()

          }} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Add Task
          </button>
        </div>
    </div>
  )
}

export default Newtask