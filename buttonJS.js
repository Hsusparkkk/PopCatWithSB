console.log("buttonJS.js loaded")

const wbButton = document.getElementById("wb")
const whButton = document.getElementById("wh")
const fileInput = document.getElementById("fileInput")
const image = document.getElementById("image")

// document.onclick = ()=>{
//     console.log("helloworld")
// }

wbButton.addEventListener("click",function(){
    let thisSrc = "wb.png"
    coElem = document.getElementById("coElem")
    coElem.innerHTML = " <img id="+"image"+" src="+thisSrc+" ></img>"
    console.log("wb",coElem)
})


whButton.addEventListener("click",function(){
    let thisSrc = "wh.png"
    coElem = document.getElementById("coElem")
    coElem.innerHTML = " <img id="+"image"+" src="+thisSrc+" ></img>"
    console.log("wh")
})

fileInput.addEventListener("change",(curFile)=>{
    const cFn = curFile.target.files[0]
    const reader = new FileReader()
    reader.onload = (e)=>{
       let  thisSrc = e.target.result
        coElem = document.getElementById("coElem")
        coElem.innerHTML = " <img id="+"image"+" src="+thisSrc+" ></img>"
    }
    reader.readAsDataURL(cFn)

}
)





