const {v4 : uuid} = require("uuid")
let data = [
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925,
    "genre": "Fiction"
  },
  {
    "id": 2,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "year": 1960,
    "genre": "Classic"
  },
  {
    "id": 3,
    "title": "1984",
    "author": "George Orwell",
    "year": 1949,
    "genre": "Dystopian"
  },
  {
    "id": 4,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "year": 1951,
    "genre": "Classic"
  },
  {
    "id": 5,
    "title": "Moby Dick",
    "author": "Herman Melville",
    "year": 1851,
    "genre": "Adventure"
  }
  
]




const getAllBooks = (req, res) => {
    try {
        res.status(200).json(data)
        
    } catch (error) {
        res.status(400).json({err : error.message})
    }
}


const getBookByID = (req, res) => {
    try {
        const{id} = req.params
        const foundBook = data.find((item) => {
            return item.id == id
        })

        if(!foundBook)
        {
            res.status(404).json({msg : "Book does not exist"})
        }

        res.status(200).json({msg : "OK", data : foundBook})
    } catch (error) {
        res.status(400).json({err : error.message})
    }
}


const addNewBook = (req, res) => {
    try {
        const{title, author, year, genre} = req.body
        data.push({title, author, year, genre, id : uuid()})
        res.status(200).json({msg : "OK", data : data})
    } catch (error) {
        res.status(400).json({err : error.message})
        
    }
}


const editBook = (req, res) => {
    try {
        const {id} = req.params
        const{title, author, year, genre} = req.body

        for(let item of data)
        {
            if(item.id == id)
            {
                item.title = title
                item.author = author
                item.year = year
                item.genre = genre

                break
            }
        }

        res.status(200).json({msg : "OK", data : data})
    } catch (error) {
        res.status(400).json({err : error.message})
    }
}


const deleteBook = (req, res) => {
    try {
        const{id} = req.params
        const filteredData = data.filter((item) => {
            return item.id != id
        })
        data = filteredData
        res.status(200).json({"msg" : "OK", data : data})
    } catch (error) {
        res.status(400).json({err : error.message})
    }
}


module.exports = {
    getAllBooks, getBookByID, addNewBook, editBook, deleteBook
}