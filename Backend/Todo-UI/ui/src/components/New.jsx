import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

const New = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)
  const nav = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = { title, desc, isCompleted }
    console.log("Submitting:", newTodo)

    fetch("http://localhost:8080/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo)
    })
    .then(() => {
      nav("/")
    })
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Add New Todo</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          placeholder="Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <textarea 
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
          rows="4"
        ></textarea>

        <div className="flex items-center gap-2">
          <input 
            type="checkbox" 
            id="ic"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
            className="w-5 h-5 accent-green-500"
          />
          <label htmlFor="ic" className="text-gray-700">Is Completed</label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Add Todo
        </button>

      </form>
    </div>
  )
}

export default New
