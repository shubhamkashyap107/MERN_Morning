import React, { useEffect } from 'react'

const TodoList = () => {

    useEffect(() => {
        async function getData()
        {
            const res = await fetch("http://localhost:8080/api/todos")
            const data = await res.json()
            console.log(data)
        }
        getData()
    }, [])


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        
        {/* Left: Task Input Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Add a Task</h2>
          <input
            type="text"
            placeholder="Title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Description"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Add Task
          </button>
        </div>

        {/* Right: Task List */}
        <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Tasks</h2>
          {/* Sample Task */}
          <div className="border border-gray-200 p-4 rounded-md">
            <h3 className="font-bold">Task Title</h3>
            <p className="text-gray-600">Task description goes here.</p>
          </div>
          {/* More tasks can be added here */}
        </div>
      </div>
    </div>
  )
}

export default TodoList
