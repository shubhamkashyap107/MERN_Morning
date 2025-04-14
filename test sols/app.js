// let n = Number(prompt("Enter your number"))

// let temp = ""
// let sc = 1
// for(let i = 1; i <= (2 * n) - 1; i++)
// {
//     let currStars = 0
//     while(currStars <  sc)
//     {
//         temp += "*"
//         currStars++
//     }
//     console.log(temp)
//     temp = ""
//     if(i >= n)
//     {
//         sc--
//     }
//     else
//     {
//         sc++
//     }
// }



// let str = prompt("Enter the string to be shifted")
// let ans = ""
// let shift = Number(prompt("Enter the shift value"))

// for(let i = 0; i < str.length; i++)
// {
//     if(str[i] == " ")
//     {
//         ans += " "
//         continue
//     }
//     let asciiValue = str.charCodeAt(i)
//     asciiValue += shift
//     ans += String.fromCharCode(asciiValue)
// }


// console.log(ans)



// let arr = [165, 172, 181, 168, 170, 174, 169, 171, 173, 167]
// let max = -Infinity
// let min = Infinity

// for(let item of arr)
// {
//     if(item > max)
//     {
//         max = item
//     }
//     if(item < min)
//     {
//         min = item
//     }
// }


// console.log(max - min)



// let arr = [1,2,3,4,5,6,7,8,9]

// let curr = 0
// for(let i = 0; i < arr.length; i++)
// {
//     curr += arr[i]
//     arr[i] = curr
// }

// console.log(arr)


// console.log(arr)

// for(let i = 0; i < arr.length; i++)
// {
//     let sum = 0
//     for(let j = 0; j <= i; j++)
//     {
//         sum += arr[j]
//     }
//     arr[i] = sum
// }

// console.log(arr)

let s = "abc"
let shifts = [3,5,9]



var shiftingLetters = function(s, shifts) {
    let ans = []
    let nextShift = 0
    for(let i = s.length - 1; i >= 0; i--)
    {
        nextShift += shifts[i]
        nextShift %= 26
        let asciiValue = s.charCodeAt(i)
        
        let temp = String.fromCharCode(asciiValue)
        ans.unshift(temp)
    }
    let finalStr = ans.join("")
    return finalStr
};

console.log(shiftingLetters(s, shifts))