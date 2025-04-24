// let n = 9
// let spaces = Math.floor(n / 2)
// let stars = 1

// for(let i = 1; i <= n; i++)
// {
//     let ans = ""

//     for(let j = 1; j <= spaces; j++)
//     {
//         if(i == Math.ceil(n / 2))
//         {
//             ans += "* "
//         }
//         else
//         {
//             ans += "  "
//         }
//     }

//     for(let j = 1; j <= stars; j++)
//     {
//         ans += "* "
//     }

//     console.log(ans)
//     if(i < n / 2)
//     {
//         stars++
//     }
//     else
//     {
//         stars--
//     }
// }




// let n = 7
// let stars = n
// let spaces = 0


// for(let i = 1; i <= 2 * n - 1; i++)
// {
//     let ans  = ""

//     for(let j = 1; j <= spaces; j++)
//     {
//         ans += " "
//     } 

//     for(let j = 1; j <= stars; j++)
//     {
//         // ans += "* "
//         if(j == 1 || j == stars || i == 1 || i == 2 * n - 1)
//         {
//             ans += "* "
//         }
//         else
//         {
//             ans += "  "
//         }
//     }


//     console.log(ans)

//     if(i < n)
//     {
//         spaces++
//         stars--
//     }
//     else
//     {
//         spaces--
//         stars++
//     }


// }




// let n = 5
// let spaces = n - 1
// let stars = 1


// for(let i = 1; i <= 2 * n - 1; i++)
// {
//     let ans = ""

//     for(let j = 1; j <= spaces; j++)
//     {
//         ans += " "
//     }

//     for(let j = 1; j <= stars; j++)
//     {
//         if(j == 1 || j == stars)
//         {
//             ans += j
//         }
//         else
//         {
//             ans += " "
//         }
//     }


//     console.log(ans)
//    if(i < n)
//    {
//     spaces--
//     stars+=2
//    }
//    else
//    {
//     spaces++
//     stars-=2
//    }
// }











// let n = 3
// let spaces = 2 * n - 3
// let stars = 1

// for(let i = 1; i <= n; i++)
// {
//     let ans = ""
//     for(let j = 1; j <= stars; j++)
//     {
//         ans += "* "
//     }

//     for(let j = 1; j <= spaces; j++)
//     {
//         ans += "  "
//     }

//     for(let j = 1; j <= stars; j++)
//     {
//         if(j == n)break
//         ans += "* "
//     }

//     console.log(ans)
//     stars++
//     spaces-=2
// }



// let n = 5
// let count = 1

// for(let i = 1; i <= n; i++)
// {
//     let ans = ""

//     for(let j = 1; j <= i; j++)
//     {
//         ans += count + " "
//         count++
//     }

//     console.log(ans)
// }



let n = 5
let spaces = n - 1
let stars = 1

for(let i = 1; i <= n; i++)
{
    let ans = ""
    for(let j = 1; j <= spaces; j++)
    {
        ans += "  "
    }

    let val = 1
    for(let j = 1; j <= stars; j++)
    {
        ans += val + " "
        if(j < stars / 2)
        {
            val++
        }
        else
        {
            val--
        }
    }

    console.log(ans)
    spaces--
    stars+=2
}

