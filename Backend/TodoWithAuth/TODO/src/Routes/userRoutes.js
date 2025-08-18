const express = require("express")
const { User } = require("../Models/userSchema")
const router = express.Router()
const bcrypt = require("bcrypt")
const validator = require("validator")
const jwt = require("jsonwebtoken")
const{isLoggedIn} = require("../Middlewares/isLoggedIn")

router.get("/user/get-user-data", isLoggedIn ,(req, res) => {
    try {
        const user = req.user
        res.status(200).json({data : user})
    } catch (error) {
        res.status(400).json({error : error.message})
    }

})

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


router.post("/user/login", async(req, res) => {
    try {
        const{username, password} = req.body
        if(!username || !password)
        {
            throw new Error("Please Enter all the fields")
        }
        const foundUser = await User.findOne({username : username}).populate("todos")

        if(!foundUser)
        {
            throw new Error("User does not exist")
        }

        const flag = bcrypt.compareSync(password, foundUser.password)
        // const flag = await bcrypt.compare(password, foundUser.password)

        if(!flag)
        {
            throw new Error("Invalid Credentials")
        }

        const token = jwt.sign({_id : foundUser._id}, process.env.jwt_secret)

        res.status(200).cookie("token", token, {maxAge : 1000 * 60 * 24}).json({msg : "User logged in", data : foundUser})
        
    } catch (error) {
        res.status(400).json({error : error.message})
    }
})

router.post("/user/logout", async(req, res) => {
    res.status(200).cookie("token", null).json({msg : "User logged out"})
}) 


module.exports = {
    router
}