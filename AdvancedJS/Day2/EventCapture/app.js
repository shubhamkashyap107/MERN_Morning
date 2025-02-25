let boxes = document.getElementsByClassName("dabba")

for(let i = 0; i < boxes.length; i++)
{
    boxes[i].addEventListener("click", () => {
        console.log(`box ${i + 1} clicked`)
    })
}
let outerDiv = document.getElementById("outer")
let middleDiv = document.getElementById("middle")
let innerDiv = document.getElementById("inner")

outerDiv.addEventListener("click", () => {
    console.log("Outer div clicked")
})

middleDiv.addEventListener("click", () => {
    console.log("Middle div clicked")
})

innerDiv.addEventListener("click", () => {
    console.log("Inner div clicked")
})