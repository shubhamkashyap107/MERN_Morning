// let arr = [1,2,3,4,1,2,3,1,2,1]
// let ans = {}

// for(let item of arr)
// {
//     if(!ans[item])
//     {
//         ans[item] = 1
//     }
//     else
//     {
//         ans[item] = ans[item] + 1
//     }
// }

// console.log(ans)




// let str = "aabcccdddd"
// let ans = {}

// for(let i = 0; i < str.length; i++)
// {
//     if(!ans[str[i]])
//     {
//         ans[str[i]] = 1
//     }
//     else
//     {
//         ans[str[i]] = ans[str[i]] + 1
//     }
// }
// console.log(ans)


let str = "aabcccdddd"
let map = new Map()

for(let i = 0; i < str.length; i++)
{
    if(!map.has(str[i]))
    {
        map.set(str[i] , 1)
    }
    else
    {
        map.set(str[i], map.get(str[i]) + 1)
    }
}

console.log(map)


// let map = new Map()

// map.set("name" , "xyz")
// map.set("age" , "32")
// map.set("color" , "red")
// map.set("pet" , "dog")
// console.log(map.get("hehe"))
// // console.log(map.has("name"))



// map.forEach((v, k) => {
//     console.log("key : "  + k + " val : " + v)
// })


// console.log(map)