let main=document.querySelector("#main")
let cursor=document.querySelector("#cursor")
let img=document.querySelector("#img")

main.addEventListener("mousemove",(dets)=>{
   gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:1,
    // ease: "bounce.out",
   })
})

img.addEventListener("mouseenter",()=>{
   gsap.to(cursor,{
    scale:2
   })
})

img.addEventListener("mouseleave",()=>{
   gsap.to(cursor,{
    scale:1
   })
})
