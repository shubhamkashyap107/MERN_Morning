// let arr = [22,-10,101,99,785,120, -10, -100]
// function maxOfArray(a, max)
// {
//     if(a.length == 1)
//     {
//         console.log(Math.max(max, a[0]))
//         return
//     }
//     if(a[0] > max)
//     {
//         max = a[0]
//     }
//     maxOfArray(a.slice(1), max)
// }
// maxOfArray(arr, -Infinity)


// function maxOfArray(a)
// {
//     if(a.length == 1)
//     {
//         return a[0]
//     }
//     return Math.max(a[0], maxOfArray(a.slice(1)))
// }
// let ans = maxOfArray(arr)
// console.log(ans)


// let str = "madam"
// let si = 0
// let ei = str.length - 1
// let flag = true
// while(si < ei)
// {
//     if(str[si] != str[ei])
//     {
//         console.log("Not a palindrome")
//         flag = false
//         break
//     }

//     si++
//     ei--
// }
// if(flag == true)
// {
//     console.log("Is a palindrome")
// }



// var str = "abba"

// function checkPalindrome(s, si, ei)
// {
//     if(si >= ei)
//     {
//         console.log("Is a palindrome")
//         return
//     }

//     if(s[si] != s[ei])
//     {
//         console.log("Not a palindrome")
//         return
//     }

//     checkPalindrome(s, si + 1, ei - 1)
// }

// checkPalindrome(str, 0, str.length - 1)





function fib(n) {

    if(n == 1)
    {
        return 0
    }
    if(n == 2)
    {
        return 1
    }

    let ans =  fib(n - 1) + fib(n - 2)
    return ans
}
  
let sol = fib(5)
console.log(sol)




























