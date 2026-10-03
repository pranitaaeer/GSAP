let menu=document.querySelector("#menu")
let close=document.querySelector("#close")
let tl=gsap.timeline()

tl.to("#full",{
    right:"0",
    duration:0.8
})

tl.from("#full h4",{
    x:100,
    duration:1,
    stagger:0.3,
    opacity:0
})
tl.from("#full button",{
    opacity:0
})

tl.pause()

menu.addEventListener("click",()=>{
    tl.play()
})

close.addEventListener("click",()=>{
    tl.reverse()
})