const express = require("express")
const router = express.Router()
const meraOTPfunc = require("../Controllers/AuthController")




router.get("/api/otp", meraOTPfunc)









module.exports = {
    router
}