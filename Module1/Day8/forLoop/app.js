// let a = 1

// while(a <= 10)
// {
//     console.log(a)

//     a++;
// }


// while()
// {

// }


// for(let b = 1; b <= 10; b++)
// {
//     console.log(b)
// }

// let b = 1
// for(;b <= 10; b++)
// {

// }

// let b = 1
// for(;b <= 10;)
// {


//     console.log(b)
//     b++
// }



// let N = Number(prompt("Enter your number"))


// for(let i = 1; i <= N; i++)
// {
//     console.log(i)
// }


// for(; N >= 1; N--)
// {
//     console.log(N)
// }

// for(let a = N; a >= 1; a--)
// {
//     console.log(a)
// }



// let N = Number(prompt("Enter your number"))


// for(let i = 1; i <= 10; i++)
// {
//     console.log(N + " * " + i + " = " + N*i)
// }



// for(let i = 1; i <= N; i++)
// {
    
//     for(let j = 1; j <= 10; j++)
//     {
//         console.log(i + " * " + j + " = " + i * j)
//     }

// }



let N = Number(prompt("Enter your number"))


// for(let i = 1; i <= N; i++)
// {
//     let ans = ""
//     for(let j = 1; j <= N; j++)
//     {
//         // console.log("*")
//         ans += "*"
//     }
//     console.log(ans)
// }


// for(let i = 1; i <= N; i++)
//     {
//         let ans = ""
//         for(let j = 1; j <= N; j++)
//         {
//             // console.log("*")
//             ans += i + " "
//         }
//         console.log(ans)
//     }


// for(let i = 1; i <= N; i++)
// {
//     let ans = ""
//     for(let j = 1; j <= N; j++)
//     {
//         // console.log("*")
//         ans += N - i + 1
//     }
//     console.log(ans)
// }


// for(let i = N; i >= 1; i--)
// {
//     let ans = ""
//     for(let j = 1; j <= N; j++)
//     {
//         // console.log("*")
//         ans += i + " "
//     }
//     console.log(ans)
// }



// for(let i = 1; i <= N; i++)
// {
//     let ans = ""
//     for(let j = N; j >= 1; j--)
//     {
//         ans += j
//     }
//     console.log(ans)
// }


// for(let i = 1; i <= N; i++)
// {
//     let ans = ""
//     for(let j = 1; j <= N; j++)
//     {
//         // console.log("*")
//         ans += N - j + 1
//     }
//     console.log(ans)
// }

// for(let i = 1; i <= N; i++)
// {
//     let ans = ""
//     for(let j = 1; j <= i; j++)
//     {
//         // ans += "* "
//         // ans += i
//         ans += j
//     }
//     console.log(ans)
// }



for(let i = 1; i <= N; i++)
{
    let ans = ""

    for(let j = 1; j <= N - i; j++)
    {
        ans += "  "
    }

    for(let j = 1; j <= 2 * i - 1; j++)
    {
        ans += "* "
    }
    
    console.log(ans)

}

