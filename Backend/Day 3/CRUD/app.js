const http = require("http")
const { v4: uuid } = require('uuid');


let db = [
    {
        name : "Shubham",
        age : 25,
        id : uuid()
    },
    {
        name : "Ashish",
        age : 22,
        id : uuid()
    }
]

const server = http.createServer((req, res) => {
    if(req.url == "/api/users" && req.method == "GET")
    {
        res.writeHead(200, {"content-type" : "application/json"})
        res.end(JSON.stringify(db))
    }
    else if(req.url == "/api/users" && req.method == "POST")
    {
        let str = ""
       req.on("data", (chunk) => {
        str += chunk.toString()
       })
       req.on("end", () => {
        let parsedData = JSON.parse(str)
        db.push({...parsedData, id : uuid()})
        res.writeHead(200, {"content-type" : "application/json"})
        res.end("User Added Successfully")
       })
    }
    else if(req.url == "/api/users/edit" && req.method == "PATCH")
    {
         let str = ""
        req.on("data", (chunk) => {
            str += chunk.toString()
        })

        req.on("end", () => {
            let parsedData = JSON.parse(str)
            let id = parsedData.id

            for(let item of db)
            {
                if(item.id == id)
                {
                    item.name = parsedData.name
                    item.age = parsedData.age
                }
            }
               res.writeHead(200, {"content-type" : "application/json"})
        res.end("User Updated Successfully")
        })
    }
    else if(req.url == "/api/users/delete" && req.method == "DELETE")
    {
        let str = ""
        req.on("data", (chunk) => {
            str += chunk.toString()
        })

        req.on("end", () => {
            console.log(str)
            let parsedData = JSON.parse(str)
            
            let filteredArray = db.filter((item) => {
                return item.id != parsedData.id
            }) 

            db = filteredArray
               res.writeHead(200, {"content-type" : "application/json"})
        res.end("User Deleted Successfully")
        })

    }
})


server.listen(8080, () => {
    console.log("Server connected to port 8080")
})
