import React from 'react'
import TodoList from './Components/TodoList'
import {Routes, Route} from "react-router-dom"
import Newtask from './Components/Newtask'
import Navbar from './Components/Navbar'
import Edit from './Components/Edit'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path='/new' element={<Newtask />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App