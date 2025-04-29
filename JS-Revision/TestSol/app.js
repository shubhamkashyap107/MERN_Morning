// we make a fn getResult which works for the given n, 
// if the n is zero, we'll return a zero, 
//if the n is a negative value , we do the same thing that we do for a postive number,
// we'll just multiply it with -1 in the end

let n = 5

function getResult(n)
{
    if(n <= 0) return 0
    let ans = 0
    let i = 1

    while(i <= n)
    {
        ans += i / (i + 1)
        i++
    }

    return ans
}

// console.log((getResult(5)))



// the function will return either a zero, or a -ve value or a =ve value as per the given n, as mentioned in the question






// function isSpecialNumber(n)
// {
//     let temp = n
//     if(n < 0 || n > 100)
//     {
//         return "Not a valid input"
//     }
//     let ans = 0
//     while(n > 0)
//     {
//         let digit = n % 10
//         n = Math.floor(n / 10)

//         let fact = 1
//         let count = 2

//         while(count <= digit)
//         {
//             fact *= count
//             count++
//         }
//         ans += fact

//     }
//     if(ans == temp)
//     {
//         return "YES"
//     }
//     else
//     {
//         return "NO"
//     }
// }


// console.log(isSpecialNumber(145))




// function marsNumber(n)
// {
//     let steps = 0
//     n = String(n)

//     while(n.length > 1)
//     {
//         steps++
//         let tempAns = 0

//         for(let i = 0; i < n.length; i++)
//         {
//             tempAns += Number(n[i])
//         }

//         n = String(tempAns)

//     }


//     console.log(steps)
// }

// marsNumber(10)


// function marsNumber(n)
// {
//     let steps = 0

//     while(n >= 10)
//     {
//         steps++
//         let sum = 0

//         while(n > 0)
//         {
//             sum += n % 10
//             n = Math.floor(n / 10)
//         }

//         n = sum

//     }

//     console.log(steps)
// }

// marsNumber(999)




// function pattern(n)
// {
//     let ans = ""
//     for(let i = 1; i <= n; i++)
//     {

//         for(let j = 1; j <= i; j++)
//         {
//             ans += "* "
//         }

//         ans += "\n"

//     }
//     return ans
// }


// console.log(pattern(5))



// function abc(n)
// {

//     // let ans = []
//     let ans = ""
//     let sum = 0

//     for(let i = 1; i <= n; i++)
//     {
//         sum += i
//         // ans.push(i)
//         ans += i + "\n"
//     }

//     // ans.push(sum)
//     ans+=sum

//     return ans
// }



// console.log(abc(5))




function findLongestSubstring(s) {
    let max = 0
    for(let i = 0; i < s.length - 1; i++)
    {
        let temp = 0
        let set = new Set()
        set.add(s[i])
        for(let j = i + 1; j <= s.length; j++)
        {

            if(!set.has(s[j]))
            {
                set.add(s[j])
                temp++
            }
            else
            {
                max = j - i
            }
        }

        max = Math.max(temp, max)

    }
    return max
}



console.log(findLongestSubstring("icpcprog"))