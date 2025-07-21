const express = require("express")
const app = express()
const {v4 : uuid} = require("uuid")
const cors = require("cors")

app.use(express.json())
app.use(cors({
    origin : ["http://localhost:5173", "http://www.noisy.co.in"],
    // credentials : true
    methods : ["GET", "POST"]
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
    const{title, desc, isCompleted} = req.body
    for(let item of todos)
    {
        if(item.id == id)
        {
            item.isCompleted = isCompleted
            item.desc = desc
            item.title = title
        }
    }
    res.status(200).json(todos)
})


app.listen(8080, () => {
    console.log("Server Running")
})