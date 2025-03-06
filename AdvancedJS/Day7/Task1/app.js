let btn = document.getElementById("btn")
let image = document.getElementById("image")
const func = (e) => {

    async function getData()
    {
        let res = await fetch("https://dog.ceo/api/breeds/image/random")
        let data = await res.json()
        // console.log(data.message)

        // image.setAttribute("src", data.message)
        image.src = data.message

    }
    getData()
}
btn.addEventListener("click", func)

window.addEventListener("keydown", (e) => {
    if(e.key == " ")
    {
        btn.removeEventListener("click", func)
    }
})

window.addEventListener("keyup", (e) => {
    if(e.key == " ")
    {
        btn.addEventListener("click", func)
    }
})
// window.addEventListener("keydown", (e) => {
//     console.log(e)
//     if(e.key == "s")
//     {
//         btn.click()
//     }
//     else if(e.key == "ArrowDown")
//     {
//         btn.removeEventListener("click", func)
//     }
//     else if(e.key == "ArrowUp")
//     {
//         btn.addEventListener("click", func)
//     }
// })
