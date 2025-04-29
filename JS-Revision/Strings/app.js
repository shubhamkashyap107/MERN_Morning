// let str = "Hello"

// let str2 = "World"


// console.log(str, str2)
// console.log(str + " " + str2)
// console.log(str.concat(" ").concat(str2))


// let naam = "Harsh"
// let age = 30



// console.log(`Hello my name is ${naam}`)


// let str = "abcd"
// let ans1 = ""

// for(let i = str.length - 1; i >= 0; i--)
// {
//     ans1 += str[i]
// }


// console.log(ans1)



// let ans2 = ""


// for(let i = 0; i < str.length; i++)
// {
//     ans2 = str[i] + ans2
// }


// console.log(ans2)

let str = "abcdef"
let arr = []





function ss(s)
{
    let ans = ""
    for(let i = 0; i < s.length; i++)
        {
            for(let j = i; j < s.length; j++)
            {
                for(let k = i; k <= j; k++)
                {
                    ans += s[k]
                }
                ans += "\n"
            }
           
        }
        return ans
}


console.log(ss("abcd"))




































