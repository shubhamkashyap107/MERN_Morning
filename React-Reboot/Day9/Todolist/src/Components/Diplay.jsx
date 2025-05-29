import React, { useState } from 'react'

const Diplay = ({todos, setTodos, setItemToBeEdited}) => {
  // console.log("Diplay Comp mounted")

  // const[todos, setTodos] = useState([])

  return (
     <div className='w-[50vw] border h-[100vh] overflow-scroll'>
          {todos && todos.map((item, index) => {
            // console.log(item)
            return (
              <div key={index} className='p-2 mt-2 bg-blue-200 w-[80%] mx-auto flex justify-between items-center'>
                
                <div>
                  <h2 className={'font-bold ' + (item.isCompleted ? "line-through" : "")} >{item.title}</h2>
                  <p className={(item.isCompleted ? "line-through" : "")}>{item.desc}</p>
                </div>

              <div className='flex gap-2'>

              <button onClick={() => {
                let filteredTodos = todos.filter((i) => {
                  return i.id != item.id
                })
                setTodos(filteredTodos)
              }}>❌</button>


              <button onClick={() => {
                let newArray = todos.map((i) => {
                  if(i.id == item.id)
                  {
                    item.isCompleted = !item.isCompleted
                  }
                  return i
                })
                setTodos(newArray)

              }}>✅</button>
              <button onClick={() => {
                setItemToBeEdited(item)
              }}>✏️</button>
              </div>



              </div>
            )
          })}
     </div>
  )
}

export default Diplay