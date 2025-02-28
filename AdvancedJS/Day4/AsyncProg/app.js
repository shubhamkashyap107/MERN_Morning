
function mySetInterval(timer, count)
{
    for(let i = 1; i <= count; i++)
    {
        setTimeout(() => {
            console.log("Hello")
        }, timer * i)
    }
}


// mySetInterval(1000, 10)



function mySetIntervalRecursive(timer, count, i)
{

    if(i > count)
    {
        return
    }

    setTimeout(() => {

        console.log("Hello from mySetIntervalRecusrive")
        mySetIntervalRecursive(timer, count, i + 1)

    }, timer)
}


function mySetIntervalRecursiveAlt(timer, count)
{

    if(count == 0)
    {
        return
    }

    setTimeout(() => {

        console.log("Hello from mySetIntervalRecursiveAlt")
        mySetIntervalRecursiveAlt(timer, count - 1)

    }, timer)
}


// mySetIntervalRecursive(1000, 10, 1)
// mySetIntervalRecursiveAlt(1000, 10)


// setTimeout(() => {
//     console.log("A")
// }, 1000)


// setTimeout(() => {
//     console.log("B")
// }, 500)





setTimeout(() => {
    console.log("Outer")
    setTimeout(() => {
        console.log("Inner")
    }, 2000)
}, 4000)



























