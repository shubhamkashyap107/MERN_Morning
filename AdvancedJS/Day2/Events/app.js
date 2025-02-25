// let myBtn = document.getElementById("btn")
// console.log(myBtn)


// function btnClickHandler()
// {
//     console.log("Button CLicked 1")
// }


// myBtn.addEventListener("click", btnClickHandler)

// myBtn.addEventListener("click", function(){
//     console.log("Btn CLicked 2")
// })


// myBtn.addEventListener("click", () => {
//     console.log("Btn clicked 3")
// })



let myButton = document.getElementsByClassName("btns")
// console.log(myButton)
myButton[0].addEventListener("click", () => {
    console.log("Btn CLicked")
})
myButton[2].addEventListener("click", () => {
    console.log("Btn CLicked")
})
myButton[1].addEventListener("click", () => {
    console.log("Btn CLicked")
})


// let allBtns = document.getElementsByClassName("btns")

// for(let item of allBtns)
// {
//     item.addEventListener("click", () => {
//         console.log("Item added to the cart")
//     })
// }