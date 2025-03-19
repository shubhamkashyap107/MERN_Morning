const inputTag = document.getElementById("title")
const textAreaTag = document.getElementById("desc")
const button = document.getElementById("btn")
const taskContainer = document.getElementById("right")
const errorMsg = document.getElementsByClassName("errormsg")

// navigator.geolocation.getCurrentPosition((pos) => {
//     console.log(pos)
// })

button.addEventListener("click", () => {

    let inputVal = inputTag.value 
    let textAreaVal = textAreaTag.value

    if(inputVal == "" || textAreaVal == "")
    {
        if(inputVal == ""){
            errorMsg[0].style.display = "block"
        }
        if(textAreaVal == ""){
        errorMsg[1].style.display = "block"
        }
        return 
    }

    const card = document.createElement("div")
    card.classList.add("cards")
    const textContainer = document.createElement("div")
    const taskTitle = document.createElement("h2")
    const taskDesc = document.createElement("p")
    const delBtn = document.createElement("button")
    const compBtn = document.createElement("button")
    const btnContainer = document.createElement("div")

    taskTitle.innerText = inputVal
    taskDesc.innerText = textAreaVal

    textContainer.appendChild(taskTitle)
    textContainer.appendChild(taskDesc)
    card.appendChild(textContainer)

    delBtn.innerText = "❌"
    compBtn.innerText = "✅"

    delBtn.addEventListener("click", () => {
        card.remove()
    })

    compBtn.addEventListener("click", () => {
        if(taskTitle.style.textDecoration == "line-through")
        {
            taskTitle.style.textDecoration = "none"
            taskDesc.style.textDecoration = "none"
        }
        else
        {
            taskTitle.style.textDecoration = "line-through"
            taskDesc.style.textDecoration = "line-through"
        }
    })

    delBtn.classList.add("utilBtn")
    compBtn.classList.add("utilBtn")

    btnContainer.appendChild(delBtn)
    btnContainer.appendChild(compBtn)
    btnContainer.style.display = "flex"
    btnContainer.style.flexDirection = "column"
    btnContainer.style.gap = "10px"
    card.appendChild(btnContainer)

    taskContainer.appendChild(card)

    inputTag.value = ""
    textAreaTag.value = ""
    errorMsg[0].style.display = "none"
    errorMsg[1].style.display = "none"

})