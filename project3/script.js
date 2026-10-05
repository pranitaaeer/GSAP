function splitText(){
let h1=document.querySelector("h1")
let title=h1.textContent
let splitedText=title.split("")
let cultter=''
let halfvalue=Math.floor(splitedText.length/2)

splitedText.forEach((elm,idx) => {
    if(idx<halfvalue){
      cultter+=`<span class="a">${elm}</span>`
    }else{
      cultter+=`<span class="b">${elm}</span>`
    }
    
});

h1.innerHTML=cultter
}

splitText()
gsap.from(" h1 .a ",{
    y:100,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3

})

gsap.from(" h1 .b ",{
    y:100,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:-0.3

})