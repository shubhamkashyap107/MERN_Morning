const express = require("express")
const { User } = require("../Models/userSchema")
const router = express.Router()
const bcrypt = require("bcrypt")
const validator = require("validator")




router.post("/user/signup", async(req, res) => {
    try {
        
    const{firstName, lastName, username, email, number, gender, dateOfBirth, password} = req.body
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

    const hashedPassword = await bcrypt.hash(password, 10)

    const createdUser = await User.create({
        firstName, lastName, username, email , number, gender, dateOfBirth, password : hashedPassword
    })

    res.status(201).json({msg : "User registered successfully", data : createdUser})
   
    } catch (error) {
        res.status(400).json({error : error.message})
    }
})








module.exports = {
    router
}