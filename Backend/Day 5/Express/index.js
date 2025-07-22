const express = require("express")
const app = express()
const {v4 : uuid} = require("uuid")
const cors = require("cors")

app.use(express.json())
app.use(cors({
    origin : ["http://localhost:5173", "http://www.noisy.co.in"],
    // credentials : true
    methods : ["GET", "POST", "DELETE", "PATCH"]
}))

let todos = [
    {
        id : uuid(),
        isCompleted : false,
        title : "Study",
        desc : "Revise JS"
    },
    {
        id : uuid(),
        isCompleted : false,
        title : "Sleep",
        desc : "Sleep for 8 Hours"
    },
    {
        id : uuid(),
        isCompleted : false,
        title : "Eat",
        desc : "Eat something healthy"
    },
]
app.get("/api/todos", (req, res) => {
    res.status(200).json(todos)
})
app.post("/api/todos", (req, res) => {
    // console.log(res.body)
    const{title, desc} = req.body
    todos.push({title, desc, id : uuid(), isCompleted : false})
    res.status(200).json(todos)
})
app.delete("/api/todos/:id", (req, res) => {
    const{id} = req.params
    let filteredTodos = todos.filter((item) => {
        return item.id != id
    })
    todos = filteredTodos
    res.status(200).json(todos)
})

app.patch("/api/todos/:id", (req, res) => {
    const{id} = req.params
    const{title, desc, changeIsComp} = req.body
    for(let item of todos)
    {
        if(item.id == id)
        {
            item.isCompleted = changeIsComp == true ? !item.isCompleted : item.isCompleted
            item.desc = desc
            item.title = title
        }
    }
    console.log(todos)
    res.status(200).json(todos)
})

app.get("/api/todos/:id", (req, res) => {
    const {id} = req.params
    const foundTask = todos.find((item) => {
        return item.id == id
    })
    res.status(200).json(foundTask)
})


app.listen(8080, () => {
    console.log("Server Running")
})