// setTimeout(() => {
//     let body = document.getElementsByTagName("body")
//     let bodyTag = body[0]
    
    
    
//     let heading = document.createElement("h1")
//     heading.innerText = "Hello from JS"
    
    
    
//     bodyTag.appendChild(heading)
// }, 5000)




let body = document.getElementsByTagName("body")
let bodyTag = body[0]

// let dabba = document.createElement("div")
// dabba.innerText = "qwetjydfvluiahsdgfasudhbvfwuy"

// dabba.style.height = "300px"
// dabba.style.border = "1px solid black"
// dabba.style.width = "300px"
// dabba.style.fontSize = "40px"
// bodyTag.appendChild(dabba)


// dabba.setAttribute("id", "box")
// dabba.setAttribute("class", "hello")
// dabba.setAttribute("style", "color : red; background-color : green;")
// console.log(dabba.getAttribute("class"))
// dabba.classList.add("myClass")
// console.log(dabba.classList.contains("xyz"))
// dabba.classList.remove("myClass")
// dabba.classList.toggle("abc")
// dabba.classList.toggle("abc")

// bodyTag.appendChild(dabba)

let arr = ["google", "instagram", "youtube", "geekforgeeks", "leetcode", "linkedin", "wikipedia"]


for(let i = 0; i < arr.length; i++)
{
    let linkTag = document.createElement("a")
    linkTag.innerText = arr[i]
    linkTag.setAttribute("href", `https://www.${arr[i]}.com`)
    linkTag.style.margin = "20px"
    linkTag.setAttribute("target", "_blank")
    bodyTag.appendChild(linkTag)
}



