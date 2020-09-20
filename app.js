const div = document.getElementById('kid');
$(".cont").hide();
var tl = gsap.timeline();
tl.fromTo(div, {x: -200} , {duration: 5, x:  (screen.width/2 - div.offsetWidth/2 + 4),ease: "back"});
setTimeout(()=>{
    $(".cont").show();
},5000)
setTimeout(()=>{
    confetti.start();
},5000)
setTimeout(()=>{
    confetti.stop();
},10000)