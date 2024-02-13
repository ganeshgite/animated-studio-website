
// locomotive smooth scrolling

const scroll = new LocomotiveScroll({
    el:document.querySelector(".main"),
    smooth:true
});

// loader logic
var loader = document.querySelector(".loader")
setTimeout(()=>{
    loader.style.top="-100%";
},2000)

// feacher project logic  script

 var pic = document.getElementById("pic")

let elem_container = document.querySelector(".elem_container")
var elem = document.querySelector(".elem");

var elem1 = document.querySelector("#elem1");
var elem2 = document.querySelector(".elem2");
var elem3 = document.querySelector(".elem3");
var elem4 = document.querySelector(".elem4");
var elem5 = document.querySelector(".elem5");
var elem6 = document.querySelector(".elem6");

elem_container.addEventListener("mouseenter",()=>{
    pic.style.display="block";

});
elem_container.addEventListener("mouseleave",()=>{
    pic.style.display="none";
});    

let elems = document.querySelectorAll(".elem")
// console.log(elems)
elems.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        var data = e.getAttribute("image-data");
        
            
            pic.style.backgroundImage= `url("${data}")`;
            pic.style.backgroundSize="cover"
        
        
    })
})



// swiper js script

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

