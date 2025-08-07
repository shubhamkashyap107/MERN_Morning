const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
const{todoRouter} = require("./Routes/todoRoutes")



mongoose.connect(process.env.mongo_url)
.then(() => {
    console.log("DB Connected")

    app.listen(process.env.PORT, () => {
        console.log("Server Running")
    })
})
.catch(() => {
    console.log("Failed")
})


app.use(express.json())
app.use("/api", todoRouter)