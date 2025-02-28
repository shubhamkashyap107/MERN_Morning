// console.log("Hello 1")

// for(let i = 0; i < 99999; i++)
// {
//     console.log("Chutney laao")
// }

// setTimeout(() => {
//     console.log("Hello from timeout 1")
// }, 4000)



// setTimeout(() => {
//     console.log("Hello from timeout 2")
// }, 2000)

// console.log("Hello 2")



// setTimeout(() => {
//     console.log("Hello from ST")
// }, 2000)

// let count = 1


// const ID1 = setInterval(() => {


//     if(count == 10)
//     {
//         clearInterval(1)
//     }

//     console.log("Hello from SI")
//     count++

// }, 500)



//bad 
// setTimeout(() => {
//     console.log("Hello")
// }, 1000)


// setTimeout(() => {
//     console.log("Hello")
// }, 2000)



// setTimeout(() => {
//     console.log("Hello")
// }, 3000)



// setTimeout(() => {
//     console.log("Hello")
// }, 4000)


// setTimeout(() => {
//     console.log("Hello")
// }, 5000)







function mySetInterval(timer, count)
{
    for(let i = 1; i <= count; i++)
    {
        setTimeout(() => {
            console.log("Hello")
        }, timer * i)
    }
}


mySetInterval(1000, 10)

























