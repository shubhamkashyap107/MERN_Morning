// let arr = [22,8,7,32,101]

// let sum = 0

// // for(let i = 0; i < arr.length; i++)
// // {
// //     sum += arr[i]
// // }


// for(let item of arr)
// {
//     sum += item
// }

// console.log(sum)

// let n = prompt("Enter the size of the array")
// let arr = []

// for(let i = 0; i < n; i++)
// {
//     arr[i] = prompt("Enter " + i + "th digit")
// }

// let max = -Infinity

// for(let item of arr)
// {
//     if(item > max)
//     {
//         max = item
//     }
// }

// console.log(max)


// let n = prompt("Enter the size of the array")
// let arr = []

// for(let i = 0; i < n; i++)
// {
//     arr[i] = prompt("Enter " + i + "th digit")
// }


// let si = 0
// let ei = arr.length - 1


// while(si < ei)
// {
//     let temp = arr[si]
//     arr[si] = arr[ei]
//     arr[ei] = temp
//     si++
//     ei--
// }

// console.log(arr)

// let n = 99
// for(let i = n; i >= -n; i--)
// {
//     console.log(i)
// }



// function saysHi()
// {
//     console.log("Hello user!!")
//     saysHi()
// }
// saysHi()

// let n = 10
// let c = 1


// function saysHi(count)
// {
//     if(count > n)
//     {
//         return
//     }
//     console.log("Hello User!")
//     saysHi(count + 1)
// }

// saysHi(c)


let n = 5

function factorial(num, ans)
{
    if(num == 1)
    {
        console.log(ans)
        return
    }
    ans *= num
    factorial(num - 1, ans)
}

factorial(n, 1)














