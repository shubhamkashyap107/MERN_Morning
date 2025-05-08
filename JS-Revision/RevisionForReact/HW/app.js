let container = document.getElementById("dabba")
container.style.display = "grid"
container.style.gridTemplateColumns = "1fr 1fr 1fr"

async function getData()
{
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/")
    let data = await res.json()
    
    for(let item of data)
    {
        let card = document.createElement("div")
        card.style.border = "1px solid black"
        card.style.width = "300px"

        let titleBox = document.createElement("h2")
        titleBox.innerText = item.title
        card.appendChild(titleBox)

        let completedBox = document.createElement("p")
        completedBox.innerHTML = `<p><strong>Status</strong> : ${item.completed}</p>`
        card.appendChild(completedBox)

        container.appendChild(card)
    }
}

getData()
