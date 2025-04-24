const boxContainer=document.querySelector(".box-container")
const resizeButton=document.getElementById("resize-button")

let nrBoxes=16;

const warning=document.createElement("h1")
warning.textContent="Less than 100, more than 1"
warning.classList.add("warning")


resizeButton.addEventListener("click",()=>{
    displayBoxes()
})

const getRandomColor=()=>{
    const c1= Math.floor(Math.random()*256)
    const c2= Math.floor(Math.random()*256)
    const c3= Math.floor(Math.random()*256)
    return `rgb(${c1},${c2},${c3})`
}

const calculateBoxHW=(nr)=>{
    return `${(960/nr)}px`
}

function displayBoxes(onMount=false){
    
    if(onMount===false) {nrBoxes= Number(prompt("Number of squares per side"))}
    if(nrBoxes>100 || nrBoxes<1){
            boxContainer.appendChild(warning) 
        return
        }
    
    boxContainer.innerHTML=""
    let square=calculateBoxHW(nrBoxes)

    for(let row=1;row<=nrBoxes;row++){
        console.log(row);
        
        for(let column=1;column<=nrBoxes;column++){
            console.log(column);
            const div=document.createElement("div")
            div.style.width=square
            div.style.height=square
            div.classList.add("box")
            div.addEventListener("mouseover",()=>{
                div.style.backgroundColor= getRandomColor()
            })
            boxContainer.appendChild(div)
        }
    }
}

displayBoxes(true)