const dabba = document.getElementById("grid")
window.addEventListener("load", () => {

    async function getData()
    {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos")
        let data = await res.json()
        
        for(let item of data)
        {
            let card = document.createElement("div")
            let title = document.createElement("h3")
            let isComp = document.createElement("p")

            title.innerHTML = "<span>Title</span> : " + item.title
            isComp.innerHTML = "<span>Status</span> : " + item.completed

            card.appendChild(title)
            card.appendChild(isComp)
            card.classList.add("cardStyle")

            dabba.appendChild(card)
        }
    }
    getData()
})