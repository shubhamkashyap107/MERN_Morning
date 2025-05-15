// let container = document.getElementById("dabba")
// container.style.display = "grid"
// container.style.gridTemplateColumns = "1fr 1fr 1fr"

// async function getData()
// {
//     let res = await fetch("https://jsonplaceholder.typicode.com/todos/")
//     let data = await res.json()
    
//     for(let item of data)
//     {
//         let card = document.createElement("div")
//         card.style.border = "1px solid black"
//         card.style.width = "300px"

//         let titleBox = document.createElement("h2")
//         titleBox.innerText = item.title
//         card.appendChild(titleBox)

//         let completedBox = document.createElement("p")
//         completedBox.innerHTML = `<p><strong>Status</strong> : ${item.completed}</p>`
//         card.appendChild(completedBox)

//         container.appendChild(card)
//     }
// }

// getData()


// let n = 200
// let oddCount = 0
// let evenCount = 0


// for(let i = 1; i <= n; i++)
// {
//     if(i % 2 == 0)
//     {
//         evenCount++
//     }
//     else
//     {
//         oddCount++
//     }
// }


// console.log(oddCount, evenCount)




// let n = 101
// let oc = 0
// let ec = 0


// if(n % 2 == 0)
// {
//     oc = n / 2
//     ec = n / 2
// }
// else
// {
//     ec = Math.floor(n / 2)
//     oc = Math.floor(n / 2) + 1
// }


// console.log(oc, ec)