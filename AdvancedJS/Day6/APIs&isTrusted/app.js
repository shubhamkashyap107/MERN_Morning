let btn = document.getElementById("btn")
let clearBtn = document.getElementById("clear")
let grid = document.getElementById("grid")


btn.addEventListener("click", (e) => {
    if(e.isTrusted == false)
    {
        return
    }
    grid.innerHTML = ""

    async function getData() {
        let res = await fetch("https://hp-api.onrender.com/api/characters")
        let data = await res.json()
        

        for(let item of data)
        {
            let card = document.createElement("div")
            card.classList.add("card")
            let image = document.createElement("img")
            let name = document.createElement("h3")

            if(item.image == "")
            {
                image.src = "https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png"
            }
            else
            {
                image.src = item.image
            }

            card.appendChild(image)


            name.innerText = item.name

            card.appendChild(name)



            grid.appendChild(card)

        }
    }



    getData()
})


clearBtn.addEventListener("click", () => {
    grid.innerHTML = ""
})