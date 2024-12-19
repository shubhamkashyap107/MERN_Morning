let num = -122

// if(num % 2 == 0)
// {
//     console.log("Even")
// }
// else
// {
//     console.log("Odd")
// }

// if(num < 0 && num % 2 == 0)
// {
//     console.log("-ve, Even")
// }
// else if(num < 0 && num % 2 != 0)
// {
//     console.log("-ve, Odd")
// }
// else if(num > 0 && num % 2 != 0)
// {
//     console.log("+ve, Odd")
// }
// else
// {
//     console.log("+ve, Even")
// }


if(num < 0)
{
    if(num % 2 == 0)
    {
        console.log("Even, -ve")
    }
    else
    {
        console.log("Odd, -ve")
    }
}
else if(num > 0)
{
    if(num % 2 == 0)
    {
        console.log("Even, +ve")
    }
    else
    {
        console.log("Odd, +ve")
    }
}



// num % 2 == 0 ? console.log("Even") : console.log("Odd")
num < 0 ? 
(num % 2 == 0 ? console.log("Even, -ve") : console.log("Odd, -ve")) 
: (num % 2 == 0 ? console.log("Even, +ve") : console.log("Odd, +ve"))