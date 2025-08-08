import React, { useEffect, useState } from 'react'
import Todo from './Todo'

const Home = () => {
    const [todos, setTodos] = useState([])
    let count = 0

    useEffect(() => {
        async function getData() {
            const res = await fetch("http://localhost:8080/api/todos")
            const data = await res.json()
            console.log(data)
            setTodos(data.data)
        }
        getData()
    }, [])


    function deleteTodo(id)
    {
        async function delTodo() {
            const res = await fetch("http://localhost:8080/api/todos/" + id, {
                method : "DELETE"
            })
            const filteredTodos = todos.filter((item) => {
                return item._id != id
            })
            setTodos(filteredTodos)
        }
        delTodo()
        
    }


    function alterIsCompleted(id, isCompleted)
    {
        async function alterIC() {
            await fetch("http://localhost:8080/api/todos/" + id, {
                method : "PATCH",
                body : JSON.stringify({isCompleted}),
                headers :{
                    "content-type" : "application/json"
                }
            })
            const newTodos = todos.map((item) => {
                if(item._id == id)
                {
                    item.isCompleted = !item.isCompleted
                }
                return item
            })
            // console.log(newTodos)
            setTodos(newTodos)
        }
        alterIC()
    }



    return (
        <div className='w-[70vw] mx-auto flex flex-col gap-5 mt-5'>

        {todos.length > 0 && todos.map((item) => {
            return <Todo id={item._id} key={item._id} date={item.date} desc={item.desc} title={item.title} isCompleted={item.isCompleted} del={deleteTodo} alter={alterIsCompleted} />
            })}
        
        </div>
    )
}

export default Home
