
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




// let n = 4

//* * * *
//*     *
//*     *
//* * * *


// for(let i = 1; i <= n; i++)
// {
//     let ans = ""

//     for(let j = 1; j <= n; j++)
//     {
//         if(i == 1 || i == n || j == 1 || j == n)
//         {
//             ans += "* "
//         }
//         else
//         {
//             ans += "  "
//         }
//     }

//     console.log(ans)
// }




// let n = 7


// for(let i = 1; i <= n; i++)
// {
//     let ans = ""

//     for(let j = 1; j <= i; j++)
//     {
//         // ans += "* "

//         if(i == n || j == 1 || i == j)
//         {
//             ans += "* "
//         }
//         else
//         {
//             ans += "  "
//         }

//     }

//     console.log(ans)
// }




// let n = 5

// for(let i = 1; i <= n; i++)
// {
//     let ans = ""
//     for(let j = 1; j <= n - i + 1; j++)
//     {
//         if(i == 1 || j == 1 || j == n - i + 1)
//         {
//             ans += "* "
//         }
//         else
//         {
//             ans += "  "
//         }
//     }
//     console.log(ans)
// }




//        *
//      * *
//    *   *
//  *     *
//* * * * *

// let n = 6

// for(let i = 1; i <= n; i++)
// {
//     let ans = ""

//     for(let j = 1; j <= n - i; j++)
//     {
//         ans += "  "
//     }

//     for(let k = 1; k <= i; k++)
//     {
//         // ans += "* "
//         if(k == 1 || k == i || i == n)
//         {
//             ans += "* "
//         }
//         else
//         {
//             ans += "  "
//         }
        
//     }

//     console.log(ans)


// }



//*       * 
//  *   * 
//    *
//  *  *
//*      *


// let n = 5

// for(let i = 1; i <= n; i++)
// {
//     let ans = ""
//     for(let j = 1; j <= n; j++)
//     {
//         if(i == j || j == n - i + 1)
//         {
//             ans += "* "
//         }
//         else
//         {
//             ans += "  "
//         }
//     }
//     console.log(ans)
// }



// let n = 4


// for(let i = 1; i <= n; i++)
// {
//     let ans = ""

//     for(let j = 1; j <= n - i; j++)
//     {
//         ans += "  "
//     }

//     for(let k = 1; k <= 2 * i - 1; k++)
//     {
//         ans += "* "
//     }

//     console.log(ans)

// }

// let n = 6
// let sp = n - 1
// let st = 1

// for(let i = 1; i <= 2*n-1 ; i++)
// {
//     let ans = ""
//     for(let j = 1; j <= sp; j++)
//     {
//         ans += "  "
//     }
//     for(let k = 1; k <= st; k++)
//     {
//         // ans += "* "
//         if(k == 1 || k == st)
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
//         sp--
//         st+=2
//     }
//     else
//     {
//         sp++
//         st-=2
//     }
// }



// let n = 5
// let stars = n
// let spaces = 0

// for(let i = 1; i <= 2 * n - 1; i++)
// {
//     let ans = ""

//     for(let j = 1; j <= stars; j++)
//     {
//         ans += "* "
//     }
//     for(let k = 1; k <= spaces; k++)
//     {
//         ans += "  "
//     }
//     for(let j = 1; j <= stars; j++)
//     {
//         ans += "* "
//     }

//     console.log(ans)    
    
//     if(i < n)
//     {
//         stars--
//         spaces+=2
//     }
//     else
//     {
//         stars++
//         spaces-=2
//     }
// }




// let n = 7
// let stars = n
// let spaces = 0

// for(let i = 1; i <= 2 * n - 1; i++)
// {
//     let ans = ""

//     for(let j = 1; j <= spaces; j++)
//     {
//         ans += " "
//     }

//     for(let j = 1; j <= stars; j++)
//     {
//         ans += "* "
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



let n = 7
let stars = 1
let spaces = Math.floor(n / 2)

for(let i = 1; i <= n; i++)
{
    let ans = ""

    for(let j = 1; j <= spaces; j++)
    {
        ans += "  "
    }

    for(let j = 1; j <= stars; j++)
    {
        ans += "* "
    }
    console.log(ans)
    if(i < n / 2)
    {
        stars+=2
        spaces--    
    }
    else
    {
        stars-=2
        spaces++
    }

}