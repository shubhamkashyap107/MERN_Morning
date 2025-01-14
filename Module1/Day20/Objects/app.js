// let obj = {
//     names : "Gabbar", // names is key, "qwerty" is value, a k-v pair is also called a property
//     age : 12,
//     isPretty : true,
//     cars : ["bmw", "alto"],
//     saysHi : function(){
//         console.log("Hello " + this.names) // a func inside an object is called a method
//     },
//     address : {
//         city : "Delhi",
//         pinCode : "110045"
//     },
//     faltu : "hjsdbflisudbfsdiug"
// }


// obj.saysHi()
// console.log(obj.address.city)
// console.log(obj.address.pinCode)
// console.log(obj.cars[0]
// let arr = obj.cars
// console.log(arr[1])
// console.log(obj.faltu)
// let username = obj["names"]
// console.log(username)
// let umar = obj["age"]
// console.log(umar)
// console.log(obj["isPretty"])




let obj = {
    names : "qwerty",
    age : 32,
    isPretty : true
}

for(let item in obj)
{
    // console.log(item)
    // console.log(obj.item)
    console.log(obj[item])
}

// for(let item of obj)
// {
//     console.log(item)
// }