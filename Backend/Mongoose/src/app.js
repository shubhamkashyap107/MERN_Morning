const express = require("express")
const app = express()
const mongoose = require("mongoose")
const{User} = require("./Models/userSchema") 
require("dotenv").config()


app.use(express.json())

// mongoose.connect(process.env.MONGO_URL)
// .then(() => {
//     console.log("DB Connected")
//     app.listen(process.env.PORT, () => {
//         console.log("Server Running")
//     })
// })
// .catch(() => {
//     console.log("Failed")
// })


async function main()
{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        app.listen(process.env.PORT, () => {
            console.log("Server Running")
        })
    } catch (error) {
        console.log(error)
    }

}
main()




app.post("/api/user", async(req, res) => {
    try {
        const{name, age, gender, hasProfilePic} = req.body
        const data = await User.insertOne({name, age, gender, hasProfilePic})
        console.log(data)
        res.status(200).json({msg : "OK"})
    } catch (error) {
        console.log(error)
        res.status(400).json({msg : error.message})
    }

})


app.get("/api/user/:id", async(req, res) => {
    const{id} = req.params
    const data = await User.find({_id : id})
    // const data = await User.find({name : "Shubham"})
    // const data = await User.findById(id)
    // const{g, a} = req.query
    // const foundUser = await User.find({
    //     $and : [
    //         {age : {$gte : a}},
    //         {gender : g}
    //     ]
    //  })
    res.status(200).json(data)
})

app.put("/api/user/:id", async(req, res) => {
    try {
        const {id} = req.params
        const{hasProfilePic, name, age, gender} = req.body
        const data = await User.findByIdAndUpdate(id, {hasProfilePic, name, age, gender}, {returnDocument : "after"})
        res.status(200).json({msg : "OK", data : data})
    } catch (error) {
        res.status(400).json({msg : error.message})
    }
    
})


app.delete("/api/user/:id", async(req, res) => {
    const{id} = req.params
    const data = await User.deleteOne({_id : id})
    console.log(data)
    res.status(200).json({msg : "OK"})
})


