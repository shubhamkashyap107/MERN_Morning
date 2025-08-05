const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        minLength : 2,
        maxLength : 15
    },
    age : {
        type : Number,
        required : true,
        max : 150,
        min : 16
    },
    gender : {
        type : String,
        enum : ["Male", "Female"], 
        required : true,
    },
    hasProfilePic : {
        type : Boolean,
        required : true,
    }
} , {timestamps : true})
// console.log(userSchema)
const User = mongoose.model("MyUser", userSchema)

module.exports = {
    User
}