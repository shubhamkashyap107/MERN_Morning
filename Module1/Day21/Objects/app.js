const obj = {
    naam : "AYUSH",
    age : 23,
    favColor : ["pink", "black", "red"],
    isHandsome : true,
    saysHi : () => {
        console.log("hello from " + this.naam)
    },
    address : {
        city : "Delhi",
        houseNo : "56"
    },
}


//optional chaining -> if animal present then check for kutta, if animal not present returns undefined
console.log(obj?.animal?.kutta)
// console.log(obj["anvi"])
// deleting a property
// delete obj.saysHi
// delete obj["saysHi"]
// modify a property
// obj.age = 24
// add more property
// obj.nationality = "Indian"
// obj["helloji"] = "qwerty"
// console.log(obj)
// console.log(obj.age)
// console.log(obj["age"])
// let arr = obj.favColor
// for(let item of arr)
// {
//     console.log(item)
// }
// console.log(arr)
console.log("Important code")