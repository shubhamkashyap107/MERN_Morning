const express = require("express")
const app = express()
const {router : userRouter} = require("./Routes/UserRoutes")
const {router : productRouter} = require("./Routes/ProductRoutes")
require("dotenv").config()


// const {random, kuchBhi} = require("./demo")
// const {kuchBhi} = require("./demo")

// require("./demo")

// random()
// kuchBhi()

app.use(userRouter)
app.use(productRouter)






app.listen(process.env.PORT, () => {
    console.log("Server Running on port " + process.env.PORT)
})