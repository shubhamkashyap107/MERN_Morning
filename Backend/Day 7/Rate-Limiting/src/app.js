const express = require("express")
const app = express()
const rateLimiter = require("express-rate-limit")
require("dotenv").config()
const xyz = require("./data.json")
const{router : authRouter} = require("./Routes/Auth")
const{router : msgRouter} = require("./Routes/MsgRoutes")

const limiter = rateLimiter({
    windowMs : 1 * 60 * 1000,
    max : 2,
    message : {
        status : 429,
        error : "Too many reqs, try again later..."
    }
})

app.use("/api/otp",limiter)
app.use(authRouter)
app.use(msgRouter)







app.listen(process.env.PORT, () => {
    console.log("Server running on PORT " + process.env.PORT)
})

