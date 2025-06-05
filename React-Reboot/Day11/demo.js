let n = 6

// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= i; j++)
//     {
//         // str += "* "
//         if(j % 2 == 0)
//         {
//             str += "0 "
//         }
//         else
//         {
//             str += "1 "
//         }
//     }

//     console.log(str)
// }


// for(let i = 1; i <= n; i++)
// {
//     let str = ""
//     val = 1

//     for(let j = 1; j <= i; j++)
//     {
//         str += val
//         // val = val == 0 ? 1 : 0
//         if(val == 0)
//         {
//             val = 1
//         }
//         else
//         {
//             val = 0
//         }
//     }

//     console.log(str)
// }



// val = 1
// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= i; j++)
//     {
//         str += val
//         // val = val == 0 ? 1 : 0
//         if(val == 0)
//         {
//             val = 1
//         }
//         else
//         {
//             val = 0
//         }
//     }

//     console.log(str)
// }



// let arr = [1,2,3,4,5,6]
// let max = -Infinity
// let secondMax = -Infinity

// for(let item of arr)
// {
//     if(item > max)
//     {
//         max = item
//     }
// }

// for(let item of arr)
// {
//     if(item < max && item > secondMax)
//     {
//         secondMax = item
//     }
// }

// console.log(secondMax)



let arr = [1,2,3,4,5,6]
let max = -Infinity
let secondMax = -Infinity


for(let item of arr)
{
    if(item > max)
    {
        secondMax = max
        max = item
    }
    if(item < max && item > secondMax)
    {
        secondMax = item
    }
}
console.log(secondMax)