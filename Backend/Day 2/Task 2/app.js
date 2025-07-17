const fs = require("fs")
const command = process.argv[2]
const fileName = process.argv[3]
const data = process.argv[4] || ""


if(command.toLowerCase() == "write")
{
    try {
        if(!data || !fileName)
        {
            console.log("Please enter valid data & file name")
            return
        }
        fs.writeFileSync(fileName, data)
    } catch (error) {
        console.log(error)
    }
}
else if(command.toLowerCase() == "read")
{
    try {
        if(!fileName)
        {
            console.log("Please enter valid file name")
            return
        }
        console.log(fs.readFileSync(fileName , "utf8"))
    } catch (error) {
        console.log(error)
    }
}
else if(command.toLowerCase() == "update")
{
    try {
        if(!data || !fileName)
        {
            console.log("Please enter valid data & file name")
            return
        }
        fs.appendFileSync(fileName, "\n" + data)
    } catch (error) {
        console.log(error)
    }

}
else if(command.toLowerCase() == "delete")
{
    try {
        if(!fileName)
        {
            console.log("Please enter a file name")
            return
        }
        fs.unlinkSync(fileName)
    } catch (error) {
        console.log(error)
    }
}






console.log("Important Code")
