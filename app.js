const div = document.getElementById('kid');
$(".cont").hide();
$(".icon").hide();
$(".greet").hide();
var tl = gsap.timeline();
tl.fromTo(div, {x: -300} , {duration: 8, x:  (screen.width/2 - div.offsetWidth/2 + 4),ease: "smooth"});

setTimeout(()=>{
    $(".cont").show();
},7000)

setTimeout(()=>{
    confetti.start();
},7000)

setTimeout(()=>{
    confetti.stop();
    $(".icon").show();
},12000)



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

