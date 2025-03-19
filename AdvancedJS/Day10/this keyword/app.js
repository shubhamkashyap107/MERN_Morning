"use strict"

//global scope
// console.log(this)




// functional scope
function fn()
{
    console.log(this)
}
fn()
window.fn()

