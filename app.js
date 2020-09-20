const div = document.getElementById('kid');
$(".cont").hide();
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
},12000)