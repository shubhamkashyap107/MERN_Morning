const express = require("express")
const { User } = require("../Models/userSchema")
const router = express.Router()
const bcrypt = require("bcrypt")
const validator = require("validator")

router.post("/user/signup", async(req, res) => {
    try {
        
    var{firstName, lastName, username, email, number, gender, dateOfBirth, password} = req.body
    if(!firstName || !lastName || !username || !email || !number || !gender || !dateOfBirth || !password)
    {
        throw new Error("Please Enter all the required Fields")
    }
    const foundUser = await User.findOne({
        $or : [
            {username : username},
            {email : email}
        ]
    })

    if(foundUser)
    {
        throw new Error("User already exists")
    }
    const flag = validator.isStrongPassword(password)
    if(!flag)
    {
        throw new Error("Please enter a strong password")
    }
    const isDateValid = validator.isDate(dateOfBirth)
    if(!isDateValid)
    {
        throw new Error("Please Enter a valid date")
    }
    const hashedPassword = await bcrypt.hash(password, 10)


    const createdUser = await User.create({
        firstName, lastName, username, email , number, gender, dateOfBirth, password : hashedPassword
    })

    var{ firstName, lastName, username, email , number, gender, dateOfBirth} = createdUser
    res.status(201).json({msg : "User registered successfully", data : {firstName, lastName, username, email , number, gender, dateOfBirth}})
   
    } catch (error) {
        res.status(400).json({error : error.message})
    }
})








module.exports = {
    router
}