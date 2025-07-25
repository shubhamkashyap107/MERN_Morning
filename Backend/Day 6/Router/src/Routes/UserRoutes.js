const express = require("express")
const router = express.Router()


const users = [
  {
    id: 1,
    name: "Shubham Kashyap",
    email: "shubham@example.com",
    age: 25,
    isActive: true
  },
  {
    id: 2,
    name: "Aisha Verma",
    email: "aisha.v@example.com",
    age: 29,
    isActive: false
  },
  {
    id: 3,
    name: "Rohan Mehta",
    email: "rohan.m@example.com",
    age: 31,
    isActive: true
  }
];

router.get("/api/users", (req, res) => {
    res.status(200).json(users)
})


module.exports = {
    router
}