
// print tables upto n 

// let n = 100


// for(let i = 1; i <= n; i++)
// {


//     for(let j = 1; j <= 10; j++)
//     {
//         console.log(i + " * " + j + " = " + j * i)
//     }


// }

//print decimal numbers 

// let n = 7


// for(let j = 0; j <= n; j++)
// {

//     let ans = ""
        
//         for(let i = 1; i <= n; i++)
//         {
//             ans += j + "." + i + " "
//         }

//     console.log(ans)
            
// }
















// let n = 5



// for(let i = 1; i <= n; i++)
// {
//     let ans = ""
//     for(let j = 1; j <= n; j++)
//     {
//         ans += "* "
//     }
//     console.log(ans)
// }

// let ans = ""
// for(let i = 1; i <= n; i++)
// {
//     for(let j = 1; j <= n; j++)
//     {
//         ans += i + " "
//     }
//     console.log(ans)
//     ans = ""
// }


// for(let i = 1; i <= n; i++)
// {
//     let ans = ""
//     for(let j = 1; j <= n; j++)
//     {
//         ans += j + " "
//     }
//     console.log(ans)
// }




//*
//* *
//* * * 
//* * * * 


// let n = 5
// let ans = ""

// for(let i = 1; i <= n; i++)
// {
//     for(let j = 1; j <= i; j++)
//     {
//         ans += "* "
//     }
//     console.log(ans)
//     ans = ""
// }


//* * * * 
//* * * 
//* * 
//* 

// n = 4

// for(let i = 1; i <= n; i++)
// {
//     let ans = ""
//     for(let j = 1; j <= n - i + 1; j++)
//     {
//         ans +=  "* "
//     }
//     console.log(ans)
// }


//      *
//    * *
//  * * *
//* * * *

// let n = 4

// for(let i = 1; i <= n; i++)
// {
//     let ans = ""
//     for(let j = 1; j <= n - i; j++)
//     {
//         ans += "  "
//     }

//     for(let k = 1; k <= i; k++)
//     {
//         ans += "* "
//     }
//     console.log(ans)


// }




let n = 4

//* * * *
//*     *
//*     *
//* * * *


for(let i = 1; i <= n; i++)
{
    let ans = ""

    for(let j = 1; j <= n; j++)
    {
        if(i == 1 || i == n || j == 1 || j == n)
        {
            ans += "* "
        }
        else
        {
            ans += "  "
        }
    }

    console.log(ans)
}