const music = new Audio("chipichapa.mp3")

music.volume = 0.7
music.loop = true
const mp3Input = document.getElementById("mp3Input")

body.addEventListener("mousemove",()=>{
    music.play()
})
body.addEventListener（"touchstart",()=>{
    music.play()
})