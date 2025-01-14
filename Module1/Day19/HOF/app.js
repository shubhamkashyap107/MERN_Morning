// function HOF(fn)
// {
//     fn()
// }

// function abc(){console.log("OKAY")}
// HOF(abc)



// function HOF()
// {
//     return function(){
//         console.log("Hello from the returned function")
//     }
// }

// let retFn = HOF()
// retFn()





// function HOF(a)
// {
//     a()
//     return () => {
//         console.log("Hello from the fn returned from the HOF")
//     }
// }

// let fn = HOF(function(){console.log("Hello from the fn sent in arguement")})
// fn()





function HOF(cb)
{
    cb()
}


HOF(() => {console.log("Hello from the callback fn")})