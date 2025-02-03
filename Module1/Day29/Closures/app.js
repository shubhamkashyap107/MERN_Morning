// function parent()
// {
//     var x = 0

//     return () => {
//         console.log(x)
//     }
    
// }



// var inner = parent()
// // console.log(inner)
// inner()


// let kyaKarnaChataHai = prompt("Enter what you want to do")


function counter()
{
    let count = 0
    return  function()
    {
        count++
        console.log(count)
    }
}


function counter(kyaKarnaChataHai)
{
    let count = 0
    if(kyaKarnaChataHai == "inc")
    {
        return  function()
        {
            count++
            console.log(count)
        }
    }
    else if(kyaKarnaChataHai == "dec")
    {
        return function()
        {
            count--
            console.log(count)
        }
    }
    else if(kyaKarnaChataHai == "reset")
    {
        return function()
        {
            count = 0
            console.log(count)
        }
    }
   
}


function counter()
{
    let count = 0
     return {
        inc : () => {
            count++
            console.log(count)
        },
        dec : () => {
            count--
            console.log(count)
        },
        reset : () => {
            count = 0
            console.log(count)
        }
    }
}


// var counterObj = counter()
// counterObj.inc()
// counterObj.inc()
// counterObj.inc()
// counterObj.inc()
// counterObj.inc()
// counterObj.dec()
// counterObj.dec()
// counterObj.reset()


// var f1 = counter("inc")
// var f2 = counter("dec")
// var f3 = counter("reset")


// f1()
// f1()
// f1()
// f1()
// f1()
// f2()
// f2()
// f3()


// let inc = counter()
// inc()
// inc()









