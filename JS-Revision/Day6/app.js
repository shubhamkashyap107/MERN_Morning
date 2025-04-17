// print all digits of a number(reversed)

// let n = 1234

// while(n > 0)
// {
//     console.log(n % 10)
//     n = Math.floor(n / 10)
// }


// reverse a number

// let ans = 0
// let num = 12345

// while(num > 0)
// {
//     let digit = num % 10
//     num = Math.floor(num / 10)
//     ans = ans * 10 + digit
// }


// console.log(ans)



// let num = 123
// let zeroes = Math.floor(Math.log10(num))
// let ans = 0

// while(num > 0)
// {
//     let digit = num % 10
//     ans += digit * (10 ** zeroes)
//     num = Math.floor(num / 10)
//     zeroes--
// }

// console.log(ans)




// let ans = 0
// let num = 12345

// while(num > 0)
// {
//     let digit = num % 10
//     num = Math.floor(num / 10)
//     ans = ans * 10 + digit
// }



// while(ans > 0)
// {
//     console.log(ans % 10)
//     ans = Math.floor(ans / 10)
// }

// let n = 9718
// let z = Math.floor(Math.log10(n))

// while(n > 0)
// {
//     console.log(Math.floor(n / 10 ** z)) // for separating the first digit
//     n = n % 10 ** z // for shortening the number for next iteration
//     z-- // decreasing zeroes for next iteration
// }



// palindrome check


// let ans = 0
// let num = 12321
// let temp = num

// while(num > 0)
// {
//     let digit = num % 10
//     num = Math.floor(num / 10)
//     ans = ans * 10 + digit
// }

// if(ans == temp)
// {
//     console.log("Is a palindrome")
// }
// else
// {
//     console.log("Not a palindrome")
// }


// let i = 1
// while(i <= 10)
// {
//     if(i % 3 == 0 && i % 2 == 0)
//     {
//         i++
//         continue
//     }


//     console.log(i)
//     i++
    
//     // if(i % 3 == 0 && i % 2 == 0)
//     // {
//     //     break
//     // }
// }



// let n = 100
// let i = 1

// while(i <= n)
// {
//     if(i % 3 == 0 && i % 5 == 0)
//     {
//         i++
//         continue
//     }
//     else
//     {
//         if(i == 23)
//         {
//             break
//         }
//         console.log(i)
//         i++
//     }
// }

// let n = 12381671781111
// let count = 0

// while(n > 0)
// {
//     let digit = n % 10
//     if(digit == 1)
//     {
//         count++
//     }
//     n = Math.floor(n / 10)
// }

// console.log(count)


//hcf & lcm

let a = 100
let b = 120


let max = Math.max(a,b)
let min = Math.min(a,b)

while(max % min != 0)
{
    let temp = max % min
    max = min
    min = temp
}
console.log("HCF : " + min)

let lcm = a * b / min

console.log("LCM : " + lcm)







