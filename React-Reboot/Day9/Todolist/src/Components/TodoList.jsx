import React from 'react'
import Form from './Form'
import Display from "./Diplay"

const TodoList = () => {
  return (
    <div className='flex'>
        <Form />
        <Display />
    </div>
  )
}

export default TodoList