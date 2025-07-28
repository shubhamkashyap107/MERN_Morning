const getMsg = (req, res) => {
    console.log("OK")
    res.status(200).json({"msg" : "OK"})
}

const getChat = (req, res) => {
    res.status(200).json("All msgs")
}


module.exports = {
    getMsg, getChat
}