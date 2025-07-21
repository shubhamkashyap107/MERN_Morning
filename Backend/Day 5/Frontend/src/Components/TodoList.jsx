import React, { useEffect, useState } from 'react'

const TodoList = () => {

    const[tasks, setTasks] = useState([])
    const[title, setTitle] = useState("")
    const[desc, setDesc] = useState("")

    useEffect(() => {
        async function getData()
        {
            const res = await fetch("http://localhost:8080/api/todos")
            const data = await res.json()
            // console.log(data)
            setTasks(data)
        }
        getData()
    }, [])

    function deleteBtnHandler(id)
    {
        async function delData() {
            const res = await fetch("http://localhost:8080/api/todos/" + id, {
                method : "DELETE"
            })
            const data = await res.json()
            setTasks(data)
        }
        delData()
    }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        
        {/* Left: Task Input Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
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
                setTasks(data)
                setTitle("")
                setDesc("")
            }
            sendData()

          }} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Add Task
          </button>
        </div>

        {/* Right: Task List */}
        <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Tasks</h2>
          {/* Sample Task */}
          {tasks.length > 0 && tasks.map((item) => {
            return (
                 <div key={item.id} className="border border-gray-200 p-4 rounded-md flex justify-between">
                    <div>


                     <h3 className="font-bold">{item.title}</h3>
                     <p className="text-gray-600">{item.desc}</p>
                    
                    </div>

                    <button onClick={() => deleteBtnHandler(item.id)}>🗑️</button>
                </div>
            )
          })}
          {/* More tasks can be added here */}
        </div>
      </div>
    </div>
  )
}

export default TodoList
