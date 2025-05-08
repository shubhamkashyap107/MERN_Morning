// let arr = [1,5,2,99,-10,11]

// let tar = 11


// const ans = arr.find((item) => {
//     if(item == tar) return item
// })


// console.log(ans)


// let arr = ["abc", "def", "ijk", "xyz"]
// let target = "ijk"


// let ans = arr.find((i) => {
//     return i == target
// })

// console.log(ans)


// let arr = [
//     {
//         name : "Xyz",
//         age : 10
//     },
//     {
//         name : "Abc",
//         age : 55
//     },
//     {
//         name : "Def",
//         age : 42
//     },
//     {
//         name : "Ijk",
//         age : 99
//     },
//     {
//         name : "Lmn",
//         age : 33
//     },
    

// ]

// let ans = arr.find((i) => {
//     return i.age > 90
// })

// console.log(ans)


// const products = [
//   { name: "Phone", stock: 3 },
//   { name: "Laptop", stock: 0 },
//   { name: "Tablet", stock: 5 },
//   { name: "Paani", stock: 0 }
// ];

// let ans = products.find((i) => {
//     return i.stock == 0
// })


// console.log(ans)

// let target = 8
// let meriArr = [[1,2,3],[4,5,6],[7,8,9],[-10,-11,-12]]

// let ans = meriArr.find((item) => {
//     // console.log(item)
//     let temp = item.find((innerItem) => {
//         // console.log(innerItem)
//         return innerItem == target
//     })

//     return temp

// })


// console.log(ans)






// let ans = meriArr.find((item) => {
//     let sum = 0

//     for(let i = 0; i < item.length; i++)
//     {
//         sum += item[i]
//     }

//     return sum < 0
// })


// console.log(ans)


// let arr = [1,2,3,4,5,56,67,34,31,90]


// let ans = arr.filter((item) => {
//     return item % 2 == 0
// })

// console.log(ans)
// console.log(arr)


// const words = ["apple", "banana", "kiwi", "mango", "blueberry"];
// let a1 = words.filter((item) => {
//     return item.length > 5
// })
// console.log(a1)






// const people = [
//     { name: "Tom", age: 16 },
//     { name: "Lucy", age: 22 },
//     { name: "Jake", age: 17 }
// ];
// let a2 = people.filter((item) => {
//     return item.age < 18
// })
// console.log(a2)





// const tasks = [
//     { title: "Clean room", done: true },
//     { title: "Buy food", done: false },
//     { title: "Study JS", done: false }
//   ];
// let a3 = tasks.filter((item) => {
//     return !item.done
// })
// console.log(a3)







// const emails = ["john@gmail.com", "amy@yahoo.com", "kate@gmail.com"];
// let a4 = emails.filter((item) => {
//     return !item.includes("@gmail.com")
// })
// console.log(a4)



// let arr = [1,2,3,4,5,6]
// let ans = arr.map((item) => {
//     // return item ** 2
//     return item % 2 == 0
// })
// console.log(ans)



// const words = ["hello", "world", "javascript"];

// let w1 = words.map((item) => {
//     return item.toUpperCase()
// })


// let w2 = words.map((item) => {
//     let s1 = item.slice(0,1)
//     let s2 = item.slice(1)
//     return s1.toUpperCase() + s2
// })

// console.log(w1, w2)


// Given an array of people, return a new array containing only their names
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

let ans1 = people.map((item) => {
    delete item.age
    return item
})
console.log(ans1)



// Add a "status": "active" property to each user object.
const users = [
  { name: "Tom" },
  { name: "Jerry" }
];
let ans2 = users.map((item) => {
    item.status = "active"
    return item
})
console.log(ans2)




// const fruits = ["apple", "banana", "cherry"];
// let ans4 = fruits.map((item, index) => {
//     let ansObj = {}
//     ansObj[index] = item
//     return ansObj
// })

// console.log(ans4)




// Multiply every element in the array by its index.
// const arr = [10, 20, 30, 40];

// let ans3 = arr.map((item, index) => {
//     return item * index
// })

// console.log(ans3)



// Given an array of file names, remove the file extension (e.g., .jpg, .png).

// const files = ["image.jpg", "document.pdf", "music.mp3"];

// let filesAns = files.map((item) => {
//     let temp = item.split(".")
//     return temp[0]
// })

// console.log(filesAns)




// let arr = [1,2,3,4,5,6,7,8,9]

// let ans = arr.reduce((acc, curr) => {
//     return acc + curr
// }, 0)
// console.log(ans)





// let sum = 0


// arr.find((item) => {
//     sum += item
// })


// console.log(sum)




// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// let ans = fruits.reduce((acc, item) => {
//     acc[item] = acc[item] ? acc[item] + 1 : 1
//     return acc
// }, {})

// console.log(ans)




const nested = [[1, 2], [3, 4], [5]]; // [1,2,3,4,5]

let ans = nested.reduce((acc, curr) => {
   return acc.concat(curr)
}, [])

console.log(ans)