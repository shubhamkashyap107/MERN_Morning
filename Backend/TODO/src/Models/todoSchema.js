const mongoose = require("mongoose")
const validator = require("validator")

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true,
        minLength : 2
    },
    desc : {
        type : String,
        required : true,
        trim : true,
        minLength : 2
    },
    isCompleted : {
        type : Boolean,
        required: true,
    },
    date : {
        type : String,
        validate(val)
        {
            const flag = validator.isDate(val)
            if(!flag)
            {
                throw new Error("Please Enter a valid date")
            }
        }
    },
    updatedOn : {
         type : String,
        validate(val)
        {
            const flag = validator.isDate(val)
            if(!flag)
            {
                throw new Error("Please Enter a valid date")
            }
        }
    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    }
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = {
    Todo
}