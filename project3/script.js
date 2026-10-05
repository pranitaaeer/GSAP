function splitText(){
let h1=document.querySelector("h1")
let title=h1.textContent
let splitedText=title.split("")
let cultter=''

console.log(splitedText)
splitedText.forEach(elm => {
    cultter+=`<span>${elm}</span>`
});

h1.innerHTML=cultter
}

splitText()
gsap.from("h1 span",{
    y:100,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3

})