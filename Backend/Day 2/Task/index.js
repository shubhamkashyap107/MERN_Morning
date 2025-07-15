const fs = require("fs")
const fs2 = require("fs/promises")


// const data = fs.readFileSync("./A.txt", "utf8")
// fs.writeFileSync("./A.txt", "")
// fs.writeFileSync("./B.txt", data)



fs.readFile("./B.txt", "utf-8", (err, data) => {
    if(err)
    {
        console.log(err)
        return
    }
        fs.writeFile("./A.txt", data, (err) => {
        if(err)
        {
            console.log(err)
            return
        }
            fs.writeFile("./B.txt", "", (err) => {
                if(err)
                {
                    console.log(err)
                    return
                }
                console.log("Done")
            })
        })

})