// let arr = [[1,2,3,99], [4,5,6], [7,8,9], [11,22, 10,11,12]]

// for(let i = 0; i < arr.length; i++)
// {
//     let ans = ""
//     for(let j = 0; j < arr[i].length; j++)
//     {
//         ans += arr[i][j] + " "
//     }
//     console.log(ans)
// }


// let arr = []
// let sizeOuter = Number(prompt("Enter the size of the outer array"))


// for(let i = 0; i < sizeOuter; i++)
// {
//     let sizeInner = Number(prompt("Enter the size of the inner array"))
//     let innerArray = []
//     for(let j = 0; j < sizeInner; j++)
//     {
//         innerArray.push(Number(prompt("Enter the element at index :" + i + " " + j)))
//     }
//     arr.push(innerArray)
// }


// for(let i = 0; i < arr.length; i++)
// {
//     let ans = ""
//     for(let j = 0; j < arr[i].length; j++)
//     {
//         ans += arr[i][j] + " "
//     }
//     console.log(ans)
// }




let arr = [[1,2,3, 11, 11,23], [15,3,1], [9,5,1, 11]]

console.log(arr)

arr.sort((a, b) => {
    return a.length - b.length
})

console.log(arr)


// let arr = [[1,2,3, 11, 11,23], [15,3,1], [9,5,1, 11]]


// for(let i = 0; i < arr.length; i++)
// {
//     arr[i].sort((a, b) => {
//         return a - b
//     })
// }

// console.log(arr)