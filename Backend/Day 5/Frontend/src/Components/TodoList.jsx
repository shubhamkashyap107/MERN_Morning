import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TodoList = () => {

    const[tasks, setTasks] = useState([])
    const nav = useNavigate()

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
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"> */}
        

        {/* Right: Task List */}
        <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4 w-[40vw]">
          <h2 className="text-xl font-semibold text-gray-700">Tasks</h2>
          {/* Sample Task */}
          {tasks.length > 0 && tasks.map((item) => {
            return (
                 <div key={item.id} className="border border-gray-200 p-4 rounded-md flex justify-between">
                    <div>


                     <h3 className={"font-bold " + (item.isCompleted ? "line-through" : "")}>{item.title}</h3>
                     <p className={"text-gray-600 " + (item.isCompleted ? "line-through" : "")}>{item.desc}</p>
                    
                    </div>

                    <div className='flex gap-2'>
                    <button onClick={() => {
                      nav("/edit/" + item.id)
                    }}>✏️</button>
                    <button onClick={() => deleteBtnHandler(item.id)}>🗑️</button>
                    <input
                    checked={item.isCompleted ? true : false}
                     onChange={() => {
                      async function editTask() {
                          const res = await fetch("http://localhost:8080/api/todos/" + item.id, {
                              method : "PATCH",
                              body : JSON.stringify({title : item.title, desc : item.desc, changeIsComp : true}),
                              headers : {
                                  "content-type" : "application/json",
                              }
                          })
                          const data = await res.json()
                          setTasks(data)
                          nav("/")

                      }
                      editTask()
                    }} type="checkbox" />
                    </div>
                </div>
            )
          })}
          {/* More tasks can be added here */}
        </div>
      {/* </div> */}
    </div>
  )
}

export default TodoList
