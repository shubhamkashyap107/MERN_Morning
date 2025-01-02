// let name = prompt("Enter your name")


// function sayHi(n)
// {
//     alert("Hello " + n)
// }



// sayHi(name)

// let n1 = Number(prompt("Enter number 1"))
// let n2 = Number(prompt("Enter number 2"))


// function sum(num1 , num2)
// {
//     // console.log(num1 + num2)

//     let ans = num1 + num2
//     // console.log(ans)
//     return ans
// }


// let answer = sum(n1, n2)
// console.log(answer)

// let r = Number(prompt("Enter the radius"))

// function areaOfCircle(radius)
// {
//     console.log(3.14 * (radius * radius))
// }


// areaOfCircle(r)


// let f = Number(prompt("Enter temp in far"))


// const fToC = (f) => {
//     let cel = (f - 32) * 5 / 9
//     console.log(cel)
// }


// fToC(f)


// let num = Number(prompt("Enter your number"))

// function checkOddEven(n)
// {
//     if(n % 2 == 0)
//     {
//         console.log("Even")
//     }
//     else
//     {
//         console.log("Odd")
//     }
// }

// checkOddEven(num)



// let str = prompt("Enter your string").toLowerCase()
// function countVowels(s)
// {
//     let count = 0
//     for(let i = 0; i < s.length; i++)
//     {
//         let char = s[i]

//         if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
//         {
//             count++
//         }
//     }

//     console.log(count)
// }
// countVowels(str)



let str = prompt("Enter your string")


function reverseAString(s)
{
    let ans = ""

    for(let i = s.length - 1; i >= 0; i--)
    {
        ans += s[i]
    }
    
    console.log(ans)

}



reverseAString(str)

































