import React, { useState } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { editTask } from '../Utils/UserSlice'

const Edit = () => {
    const{id} = useParams()
    const dispatch = useDispatch()
    const userData = useSelector(store => store.user)
    const itemToBeEdited = userData.todos.find((item) => {
        return item._id == id
    })

  const [title, setTitle] = useState(itemToBeEdited.title)
  const [desc, setDesc] = useState(itemToBeEdited.desc)
  const [isCompleted, setIsCompleted] = useState(itemToBeEdited.isCompleted)
  const nav = useNavigate()

  const handleEdit = () => {
    async function et() {
        const res = await axios.patch(`${import.meta.env.VITE_DOMAIN}/todos/${id}`, {title, desc, isCompleted}, {withCredentials : true})
        console.log(res)
        dispatch(editTask(res.data.data))
        nav("/")
    }
    et()
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Edit Task</h2>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter task title"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter task description"
            rows="4"
          ></textarea>
        </div>

        {/* Checkbox */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
            className="mr-2"
          />
          <span className="text-gray-700">Completed</span>
        </div>

        {/* Edit Button */}
        <button
          onClick={handleEdit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
        >
          Edit Task
        </button>
      </div>
    </div>
  )
}

export default Edit
