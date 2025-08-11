const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")
const{todoRouter} = require("./Routes/todoRoutes")
const{router : userRouter} = require("./Routes/userRoutes")



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

app.use(cors())
app.use(express.json())
app.use("/api", todoRouter)
app.use("/api", userRouter)