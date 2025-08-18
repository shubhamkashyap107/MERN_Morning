import React from 'react'
import Navbar from './Navbar'
import {useSelector} from "react-redux"

const Home = () => {

  const userData = useSelector(store => store.user)
  console.log(userData)
  return (
    <div>
      <Navbar />
{userData.todos.map((item) => (
  <div key={item._id} className="bg-white shadow rounded p-4 my-4 w-[60vw] mx-auto ">
    <h2 className="text-lg font-semibold text-blue-600 mb-2">{item.title}</h2>
    <p className="text-gray-700 mb-2">{item.desc}</p>
    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-2">
      <span><strong>Date:</strong> {item.date}</span>
      <span><strong>Updated:</strong> {item.updatedOn}</span>
      <span><strong>Status:</strong> {item.isCompleted ? 'Completed' : 'Incomplete'}</span>
      <span><strong>Author ID:</strong> {item.author}</span>
    </div>
    <div className="text-xs text-gray-400">ID: {item._id} | Version: {item.__v}</div>
  </div>
))}


    </div>
  )
}

export default Home