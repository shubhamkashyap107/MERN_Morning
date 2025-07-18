const express = require("express")
const app = express()


const db = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    bio: "High-quality wireless headphones with noise cancellation."
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 5499,
    bio: "A smart watch that tracks fitness and receives notifications."
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 999,
    bio: "Ergonomic laptop stand to improve posture and cooling."
  },
  {
    id: 4,
    name: "Portable Charger",
    price: 1299,
    bio: "10,000mAh power bank for on-the-go device charging."
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 1999,
    bio: "Compact speaker with powerful bass and 10-hour battery life."
  }
];


app.get("/api/products", (req, res) => {
    res.status(200).json(db)
})

app.get("/api/products/:id", (req, res) => {
    const{id} = req.params
    const foundProduct = db.find((item) => {
        return item.id == id
    })
    res.status(200).json(foundProduct)
})

app.get("/api/filter-product", (req, res) => {
    const{price} = req.query
    const foundProducts = db.filter((item) => {
        console.log(item.price, price)
        return item.price >= price
    })

    res.status(200).json(foundProducts)
})



app.listen(8080, () => {
    console.log("Server Connected to PORT 8080")
})