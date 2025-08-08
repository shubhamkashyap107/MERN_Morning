import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  const{id} = useParams()
  const nav = useNavigate()

  useEffect(() => {
    async function getData()
    {
      const res = await fetch("http://localhost:8080/api/todos/" + id)
      const data = await res.json()
      // console.log(data)
      setTitle(data.data.title)
      setDesc(data.data.desc)
      setIsCompleted(data.data.isCompleted)
    }
    getData()
  }, [])



  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Edit Todo</h1>

      <div className="space-y-4">
        <input 
          type="text" 
          placeholder="Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea 
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          rows="4"
        ></textarea>

        <div className="flex items-center gap-2">
          <input 
            type="checkbox" 
            id="ic"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
            className="w-5 h-5 accent-blue-500"
          />
          <label htmlFor="ic" className="text-gray-700">Is Completed</label>
        </div>

        <button
          onClick={() => {
            async function updateTodo(params) {
              await fetch(`http://localhost:8080/api/todos/${id}`, {
                method : "PATCH",
                body : JSON.stringify({isCompleted, desc, title}),
                headers : {
                  "content-type" : "application/json"
                }
              })
              nav("/")
            }
            updateTodo()
          }}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Update Todo
        </button>
      </div>
    </div>
  )
}

export default Edit
