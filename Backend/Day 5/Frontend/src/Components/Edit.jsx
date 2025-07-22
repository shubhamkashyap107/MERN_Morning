import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const{id} = useParams()
    const[data, setData] = useState({})
    // console.log(data)
    const nav = useNavigate()
    useEffect(() => {
        async function getData()
        {
            const res = await fetch("http://localhost:8080/api/todos/" + id)
            const data = await res.json()
            setData(data)
        }
        getData()
    }, [])
  return (
 <div className="flex justify-center mt-12 h-[80vh] items-center">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Todo</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full p-2 border rounded mb-4"
          value={data.title ? data.title : ""}
          onChange={(e) => {
            setData({...data, title : e.target.value})
          }}
        />
        <textarea
          name="desc"
          placeholder="Description"
          className="w-full p-2 border rounded mb-4 h-32 resize-none"
        value={data.title ? data.desc : ""}
        onChange={(e) => {
            setData({...data, desc : e.target.value})
          }}
        ></textarea>
        <button
        onClick={() => {
            async function editTask() {
                const res = await fetch("http://localhost:8080/api/todos/" + id, {
                    method : "PATCH",
                    body : JSON.stringify(data),
                    headers : {
                        "content-type" : "application/json",
                    }
                })
                await res.json()

                nav("/")

            }
            editTask()
        }}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default Edit