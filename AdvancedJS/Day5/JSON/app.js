let obj = {
    name : "Shubham",
    age : 32,
    color : ["pink", "red", "blue"],
    skills : {
        frontend : "react",
        backend : "node"
    },
    isGood : false,
    sayHi : () => {
        console.log("Hello")
    }
}

let dataFromServer = JSON.stringify(obj)

let jsObj = JSON.parse(dataFromServer)

console.log(jsObj)
console.log(jsObj.name)
console.log(jsObj.age)
console.log(jsObj.color)