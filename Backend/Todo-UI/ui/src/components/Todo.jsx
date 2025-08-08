import React from 'react'
import { useNavigate } from 'react-router-dom'

const Todo = ({ title, desc, date, isCompleted,  id , del, alter}) => {
  const nav = useNavigate()

  return (
    <div 
      className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
    >
      <div>
        <h2 className={`text-lg font-semibold ${isCompleted ? 'line-through text-gray-500' : 'text-gray-900'}`}>
          {title}
        </h2>
        <p className={`text-sm ${isCompleted ? 'line-through text-gray-400' : 'text-gray-600'}`}>
          {desc}
        </p>
        <span className="text-xs text-gray-400">
          {new Date(date).toLocaleDateString()}
        </span>
      </div>
      
      <div className='flex gap-2 items-center'>

      <input 
      onChange={() => {
        alter(id, !isCompleted)
      }}
        type="checkbox" 
        checked={isCompleted} 
        className="w-5 h-5 accent-green-500 cursor-pointer"
      />
      <button onClick={() => {
        del(id)
      }}>❌</button>
      <button onClick={() => {
        nav(`/edit/${id}`)
      }}>✏️</button>

      </div>

    </div>
  )
}

export default Todo
