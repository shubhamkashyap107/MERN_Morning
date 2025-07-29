const express = require("express")
const router = express.Router()
const { getAllBooks, getBookByID, addNewBook, editBook, deleteBook } = require("../Controllers/BookControllers")



router.get("/books", getAllBooks)
router.get("/books/:id", getBookByID)
router.post("/books", addNewBook)
router.put("/books/:id", editBook)
router.delete("/books/:id", deleteBook)




module.exports = {
    router
}