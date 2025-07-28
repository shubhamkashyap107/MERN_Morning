const express = require("express")
const router = express.Router()
const{getMsg, getChat} = require("../Controllers/MsgController")



router.get("/api/msg", getMsg)
router.get("/api/msg/get", getChat)







module.exports = {
    router
}