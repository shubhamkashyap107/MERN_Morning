// let button = document.getElementById("btn")


// console.log(1)




// setTimeout(() => {
//     console.log(2)
// }, 0)

// const id = setInterval(() => {
//     console.log("B")
// }, 3000)



// console.log(3)



// button.addEventListener("click", () => {
//     clearInterval(id)
// })




// let myPromise = new Promise((resolve, reject) => {
//     // resolve("Hello")
//     reject("Hello")
// })


// console.log(myPromise)



// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let data = false
//         if(data)
//         {
//             resolve("Data fetched")
//         }
//         else
//         {
//             reject("Data not found")
//         }
//     }, 2000)
// })


// async function abc() {
//     try {
//         let ans = await p1
//         console.log(ans)
//         console.log("Done")
//     } catch (error) {
//         console.log(error)
//     }
   
// }
// abc()





// p1.then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })
// .finally(() => {
//     console.log("Mai to chalunga hi chalunga")
// })

// setTimeout(() => {
//     console.log(p1)
// }, 6000)

// p1
// .then(() => {
//     console.log("OK")
// })
// .catch(() => {
//     console.log("Not ok")
// })





// fetch("https://dog.ceo/api/breeds/image/random")
// .then((data) => {
//     let ans = data.json()
//     return ans
// })
// .then((ans) => {
//     console.log(ans)
// })
// let image = document.getElementById("image")
// let button = document.getElementById("btn")

// async function getData()
// {
//     let res = await fetch("https://dog.ceo/api/breeds/image/random")
//     let data = await res.json()
//     image.src = data.message
// }

// getData()


// button.addEventListener("click", () => {
//     getData()
// })

// let mainDiv = document.getElementById("main")


// async function getData() {
//     let res = await fetch("https://hp-api.onrender.com/api/characters")
//     let data = await res.json()
    
//     for(let item of data)
//     {
//         let imageTag = document.createElement("img")
//         imageTag.src = item.image || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
//         imageTag.style.height = "300px"
//         imageTag.style.width = "200px"

//         let nameTag = document.createElement("h2")
//         nameTag.innerText = item.name

//         let card = document.createElement("div")


//         card.appendChild(imageTag)
//         card.appendChild(nameTag)
//         mainDiv.appendChild(card)
//     }
// }

// getData()


let imageTag = document.getElementById("image")

async function getData(){
    let res = await fetch("https://api.thecatapi.com/v1/images/search")
    let data = await res.json()
    // console.log(data[0].url)
    imageTag.src = data[0].url
}

getData()




