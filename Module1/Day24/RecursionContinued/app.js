// let n = 5
// let ans = 1

// for(let i = n; i >= 2; i--)
// {
//     ans *= i
// }

// console.log(ans)
// var ans = 1
// var n = 5


// function factorial(num)
// {
//     if(num == 0)
//     {
//         return 1
//     }
//     return num * factorial(num - 1)
// }


// let ans = factorial(n)
// console.log(ans)

// function factorial(num, ans)
// {
//     if(num == 1)
//     {
//         console.log(ans)
//         return
//     }
//     ans *= num
//     factorial(num - 1, ans)
// }


// factorial(n, ans)


// let arr = [11,22,34,56,78,234,12]
// let sum = 0


// for(let item of arr)
// {
//     sum += item
// }


// console.log(sum)






// let arr = [1, 3, 5, 7, 9]
// function sumOfArray(a)
// {
//     if(a.length == 1)
//     {
//         return a[0]
//     }
//     return a[0] + sumOfArray(a.slice(1))
// }
// let ans = sumOfArray(arr)
// console.log(ans)






// let str = "abcdefhghij"

// let revStr = ""

// for(let i = 0; i < str.length; i++)
// {
//     revStr = str[i] + revStr
// }


// // for(let i = str.length - 1; i >= 0; i--)
// // {
// //     revStr += str[i] // revStr = revStr + str[i]
// // }


// console.log(revStr)




let str = "atul rana"
function revAString(s)
{
    if(s.length == 1)
    {
        return s[0]
    }
    return revAString(s.slice(1)) + s[0]
}

let ans = revAString(str)
console.log(ans)