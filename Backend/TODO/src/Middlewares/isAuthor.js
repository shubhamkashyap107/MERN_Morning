const { Todo } = require("../Models/todoSchema")


async function isAuthor(req, res, next) {
    try {
        const{id} = req.params
        const foundTodo = await Todo.findById(id)
        if(!foundTodo.author.equals(req.userId))
        {
            throw new Error("Permission Denied")
        }
        next()
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

module.exports = {
    isAuthor
}