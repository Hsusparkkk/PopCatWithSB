const music = new Audio("chipichapa.mp3")

music.volume = 0.7
music.loop = true


wbButton.addEventListener("click",function(){
    music.play()
})


whButton.addEventListener("click",function(){
    music.play()
})

pcButton.addEventListener("click",()=>{
    music.play()
})
fileInput.addEventListener("change",()=>{
    let oldFileInput = document.getElementById("fileInput")
    funcBar.removeChild(oldFileInput)
    const newFileInput = document.createElement("input")
    newFileInput.type = "file"
    newFileInput.accept="image/png"
    newFileInput.id = "fileInput"
    funcBar.appendChild(fileInput)
    music.play()
})