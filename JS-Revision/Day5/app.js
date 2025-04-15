// for(let i = 100; i >= 0; i--)
// {
//     console.log(i)
// }

// for(let i = 100; i >= 0; i--)
// {
//     if(i % 5 == 0)
//     {
//         console.log(i)
//     }
// }


// for(let i = 1; i <= 100; i++)
// {
//     if(i % 3 != 0)
//         {
//             console.log(i)
//         }   
// }



// for(let i = 1; i <= 100; ++i)
// {
//     console.log(i)
// }

// let i = 1

// for(;;)
// {
//     if(i > 100)break
//     console.log(i)
//     ++i
// }
    















// let n = 101




// while(n >= 0)
// {
//     if(n % 2 == 0) console.log(n)
//     n--
// }




// let i = 1

// while(i <= n)
// {
//     console.log(i)
//     i += 2
// }


// let i = 2

// while(i <= n)
// {
//     console.log(i)
//     i += 2
// }






// let a = 1

// while(a <= 10)
// {
//     console.log(a)
//     a += 3
// }





// while(a < 10){ console.log("OK") ; a++}



// while(a < 10){
//     console.log("OK") 
//     a++
// }


// while(a < 10)
// {
//     console.log("OK") 
//     a++
// }




let n = 99
let start = 1


for(let i = 1; i <= n; i++)
{
    if(i % 3 == 0 && i % 5 == 0)
        {
            console.log("FizzBuzz")
        }
        else if(i % 3 == 0)
        {
            console.log("Fizz")
        }
        else if(i % 5 == 0)
        {
            console.log("Buzz")
        }
        else
        {
            console.log(i)
        }
}

while(start <= n)
{
    if(start % 3 == 0 && start % 5 == 0)
    {
        console.log("FizzBuzz")
    }
    else if(start % 3 == 0)
    {
        console.log("Fizz")
    }
    else if(start % 5 == 0)
    {
        console.log("Buzz")
    }
    else
    {
        console.log(start)
    }
    start++
}
