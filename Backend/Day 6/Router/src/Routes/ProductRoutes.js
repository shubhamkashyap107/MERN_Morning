const express = require("express")
const router = express.Router()

const products = [
  {
    id: 101,
    name: "Wireless Headphones",
    price: 2999,
    inStock: true,
    category: "Electronics"
  },
  {
    id: 102,
    name: "Yoga Mat",
    price: 899,
    inStock: true,
    category: "Fitness"
  },
  {
    id: 103,
    name: "Desk Lamp",
    price: 1199,
    inStock: false,
    category: "Home Decor"
  }
];

router.get("/api/products", (req, res) => {
    res.status(200).json(products)
})


module.exports = {
    router 
}