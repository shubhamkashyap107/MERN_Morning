let n = Number(prompt("Enter n"))



// for(let i = 1; i <= n; i++)
// {
//     let ans = ""

//     for(let star = 1; star <= n; star++)
//     {
//         ans += "* "
//     }
    
//     console.log(ans)
// }


// let i = 1

// while(i <= n)
// {
//     let ans = ""
//     let j = 1

//     while(j <= n)
//     {
//         ans += "* "
//         j++
//     }

//     console.log(ans)
//     i++
// }


// for(let row = 1; row <= n; row++)
// {
//     let ans = ""

//     for(let star = 1; star <= row; star++)
//     {
//         ans += "* "
//     }

//     console.log(ans)
// }

// let row = 1
// while(row <= n)
// {
//     let ans = ""
//     let star = 1

//     while(star <= row)
//     {
//         ans += "* "
//         star++
//     }

//     console.log(ans)
//     row++
// }



// for(let r = 1; r <= n; r++)
// {
//     let ans = ""

//     for(let s = 1; s <= r; s++)
//     {
//         ans += r + " "
//     }

//     console.log(ans)

// }





// for(let r = 1; r <= n; r++)
// {
//     let ans = ""

//     for(let s = 1; s <= r; s++)
//     {
//         ans += s + " "
//     }

//     console.log(ans)

// }

// for(let row = 1; row <= n; row++)
// {
//     let ans = ""


//     for(let col = 1; col <= n - row + 1 ; col++)
//     {
//         ans += "* "
//     }

//     console.log(ans)

// }


// let sc = 1


// for(let r = 1; r <= n; r++)
// {
//     let ans = ""
//     let sp = 1

//     while(sp <= n - r)
//     {
//         ans += " "
//         sp++
//     }

//     let st = 1

//     while(st <= sc)
//     {
//         ans += "*"
//         st++
//     }
//     sc+=2

//     console.log(ans)
// }





// for(let r = 1; r <= n; r++)
// {
//     let ans = ""
//     let sp = 1

//     while(sp <= n - r)
//     {
//         ans += "  "
//         sp++
//     }

//     let st = 1

//     while(st <= 2 * r - 1)
//     {
//         ans += "* "
//         st++
//     }
 

//     console.log(ans)
// }

let spc = Math.floor(n / 2) 
let stc = 1

for(let r = 1; r <= n; r++)
{
    let ans = ""
    let sp = 1
    while(sp <= spc)
    {
        ans += "  "
        sp++
    }
    let st = 1
    while(st <= stc)
    {
        ans += "* "
        st++
    }
    console.log(ans)
    if(r >= Math.floor(n/2) + 1)
    {
        spc++
        stc -= 2
    }
    else
    {
        spc--
        stc+=2
    }
}



























