const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
       text.textContent = "Blogger";
    }, 4000);
    setTimeout(() => {
       text.textContent = "full stack developer";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);




gsap.to("#slider1",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#slider1",
        // markers:true,
        start:"top bottom",
        // end:"top top",
        scrub:1
    },
    x:"-30%",
    duration:2
})



function vidop(){
    document.querySelectorAll("#mover video").forEach(function(elem){
        elem.style.opacity = 0
    })
}
function worpad(){
    document.querySelectorAll(".work").forEach(function(work){
        work.style.padding = "0px 100px"
    })
}


var mover = document.querySelector("#mover")
var works = document.querySelector("#works")

works.addEventListener("mouseenter",function(){
    mover.style.opacity = 1
})
works.addEventListener("mouseleave",function(){
    mover.style.opacity = 0
    worpad()
})
works.addEventListener("mousemove",function(dets){
    mover.style.left = (dets.x)+"px"
    mover.style.top = (dets.y-200)+"px"
})


var work1 = document.querySelector("#work1")
var video1 = document.querySelector("#video1")
work1.addEventListener("mouseenter",function(){
    vidop()
    video1.style.opacity = 1
    worpad()
    work1.style.paddingLeft = "120px"
    work1.style.paddingRight = "80px"
})


var work2 = document.querySelector("#work2")
var video2 = document.querySelector("#video2")
work2.addEventListener("mouseenter",function(){
    vidop()
    video2.style.opacity = 1
    worpad()
    work2.style.paddingLeft = "120px"
    work2.style.paddingRight = "80px"
})


var work3 = document.querySelector("#work3")
var video3 = document.querySelector("#video3")
work3.addEventListener("mouseenter",function(){
    vidop()
    video3.style.opacity = 1
    worpad()
    work3.style.paddingLeft = "120px"
    work3.style.paddingRight = "80px"
})

var work4 = document.querySelector("#work4")
var video4 = document.querySelector("#video4")
work4.addEventListener("mouseenter",function(){
    vidop()
    video4.style.opacity = 1
    worpad()
    work4.style.paddingLeft = "120px"
    work4.style.paddingRight = "80px"
})


