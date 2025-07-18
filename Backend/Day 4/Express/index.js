const express = require("express")
const app = express()

// app.use() -> middleware(works on every incoming request)
app.use(express.json())

let obj = {
    name : "qwerty",
    age : 42
}

app.use("/api/kuchbhi", (req, res) => {
    res.send("Hello from kuch bhi api")
})

app.get("/api/home", (req, res) => {
    // res.send(obj)
    console.log(req.body)
    res.status(201)
    res.json(obj)
})

app.post("/api/login/:id", (req, res) => {
    const{q} = req.query
    console.log(q)

    const{id} = req.params
    console.log(id)

    const{name} = req.body
    console.log(name)

    res.status(202).json("Hi")
})

app.listen(8080, () => {
    console.log("Server Connected to PORT 8080")
})