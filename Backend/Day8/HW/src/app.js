const express = require("express")
const app = express()
require("dotenv").config()
const {router : bookRouter} = require("./Routes/BookRoutes")
const cors = require("cors")




app.use(express.json())
app.use(cors())
app.use("/api", bookRouter)






app.listen(process.env.PORT, () => {
    console.log("Server connected to PORT " + process.env.PORT)
})