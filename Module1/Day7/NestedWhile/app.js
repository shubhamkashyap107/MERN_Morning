// let count = 1;

// while(count <= 5)
// {
//     let count2 = 1
//     while(count2 <= 5)
//     {
//         console.log(count2)
//         count2++
//     }
//     count++
// }




// let N = Number(prompt("Enter your number"))
// let count = 1


// while(count <= 10)
// {
//     console.log(N + " * " + count + " = " + N * count)
//     count++
// }

// let N = Number(prompt("Enter your number"))
// let count = 1


// while(count <= N)
// {
//     let count2 = 1

//     while(count2 <= 10)
//     {
//         console.log(count + " * " + count2 + " = " + count * count2)
//         count2++
//     }

//     count++
// }

// let count = 1
// while(count <= 5)
// {
//     let count2 = 1
//     let ans = ""
//     while(count2 <= count)
//     {
//         // console.log(count2)
//         ans += count2
//         count2++
//     }
//     console.log(ans)
//     count++
// }


// let count = 1
// let val = 1

// while(count <= 5)
// {
//     let count2 = 1
//     let ans = ""
//     while(count2 <= count)
//     {
//         ans += val + "  "
//         val++
//         count2++
//     }
//     console.log(ans)
//     count++
// }

let row = 1

while(row <= 5)
{
    let ans = ""
    let spaces = 5 - row
    let cs = 1

    while(cs <= spaces)
    {
        ans += " "
        cs++
    }

    let cn = 1
    while(cn <= row)
    {
        ans += cn 
        cn++
    }

    console.log(ans)
    row++
}



























