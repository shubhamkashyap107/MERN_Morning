let prevBtn = document.getElementById("backbtn")
let playBtn = document.getElementById("playbtn")
let nextBtn = document.getElementById("nextbtn")
let imageTag = document.getElementById("imagetag")
let nameTag = document.getElementById("nametag")
let slider = document.getElementById("slider")
let volumeSlider = document.getElementById("volumeslider")
let currentTime = document.getElementById("curr-time")
let totalTime = document.getElementById("total-time")

const info = [
    {
        displayName : "Dekha ek khwab",
        trackName : "track1",
        image : "https://plus.unsplash.com/premium_photo-1682308247054-d1e13ba13a0b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJlYW1zfGVufDB8fDB8fHww"
    },
    {
        displayName : "Yeh dosti",
        trackName : "track2",
        image : "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyaWVuZHNoaXB8ZW58MHx8MHx8fDA%3D"
    },
    {
        displayName : "Ek din aap",
        trackName : "track3",
        image : "https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG92ZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        displayName : "Kabhi Kabhi",
        trackName : "track4",
        image : "https://images.unsplash.com/photo-1518644730709-0835105d9daa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHV6emxlZHxlbnwwfHwwfHx8MA%3D%3D"
    },
]

let currentIndex = 0
let currentMusic = new Audio()
currentMusic.src = `./media/${info[currentIndex].trackName}.mp3`
currentMusic.volume =  0.5



playBtn.addEventListener("click", () => {
    if(playBtn.classList.contains("fa-circle-play"))
    {
        playBtn.classList.remove("fa-circle-play")
        playBtn.classList.add("fa-circle-pause")
        imageTag.src = info[currentIndex].image
        nameTag.innerText = info[currentIndex].displayName
        currentMusic.play()
    }
    else
    {
        playBtn.classList.remove("fa-circle-pause")
        playBtn.classList.add("fa-circle-play")
        currentMusic.pause()
    }
})


nextBtn.addEventListener("click", () => {
    currentIndex++
    if(currentIndex == info.length)
    {
        currentIndex = 0
    }
    if(playBtn.classList.contains("fa-circle-play"))
    {
        playBtn.classList.remove("fa-circle-play")
        playBtn.classList.add("fa-circle-pause")
    }
    currentMusic.src = `./media/${info[currentIndex].trackName}.mp3`
    imageTag.src = info[currentIndex].image
    nameTag.innerText = info[currentIndex].displayName

    currentMusic.play()
})

prevBtn.addEventListener("click", () => {
    currentIndex--
    if(currentIndex == -1)
    {
        currentIndex = info.length - 1
    }
    if(playBtn.classList.contains("fa-circle-play"))
    {
        playBtn.classList.remove("fa-circle-play")
        playBtn.classList.add("fa-circle-pause")
    }
    currentMusic.src = `./media/${info[currentIndex].trackName}.mp3`
    imageTag.src = info[currentIndex].image
    nameTag.innerText = info[currentIndex].displayName

    currentMusic.play()
})

let isSliding = false

currentMusic.addEventListener("timeupdate", () => {
    if(!isSliding == true)
    {
        if(currentMusic.currentTime == currentMusic.duration)
        {
            nextBtn.click()
        }
        if(currentMusic.duration){
            totalTime.innerText =`${Math.floor(currentMusic.duration / 60)}:${Math.floor(currentMusic.duration % 60)}`
            currentTime.innerText = `${Math.floor(currentMusic.currentTime / 60)}:${Math.floor(currentMusic.currentTime % 60)}`
        }
        slider.value = (currentMusic.currentTime / currentMusic.duration) * 100
    }
})


slider.addEventListener("input", () => {
    isSliding = true
})

slider.addEventListener("change", () => {
    currentMusic.currentTime = (slider.value * currentMusic.duration) / 100
    isSliding = false
})

volumeSlider.addEventListener("change", () => {
    currentMusic.volume = volumeSlider.value / 100
})