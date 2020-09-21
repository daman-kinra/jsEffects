const div = document.getElementById('kid');
$(".cont").hide();
$(".icon").hide();
$(".greet").hide();
var tl = gsap.timeline();
tl.fromTo(div, {x: -300} , {duration: 6, x:  (screen.width/2 - div.offsetWidth/2 + 1),ease: "smooth"});

setTimeout(()=>{
    $(".cont").show();
},6000)

setTimeout(()=>{
    confetti.start();
},6000)

setTimeout(()=>{
    confetti.stop();
    $(".icon").show();
},10000)



const nav = document.querySelector('.nav')
const img = document.querySelector('.img');
let clicked = false;
const foo = () =>{
    clicked=!clicked;
    if(clicked==true){
    nav.classList.add('nav1');
    img.classList.add('img1');
    setTimeout(()=>{
        $(".greet").show();
    },600)
    }
    else{
        nav.classList.remove('nav1')
        img.classList.remove('img1');
        $(".greet").hide();
    }
}

