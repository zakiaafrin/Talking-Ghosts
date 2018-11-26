var box = document.getElementById("container");
var text = document.createElement("div");
text.innerHTML = " ";
box.appendChild(text);

function score() {                                 
    var score = document.getElementById("scoreBox");
    score.innerHTML = parseInt(score.innerHTML) + 1;
}

function gulu() {
    text.innerHTML = "He He He....Hah Ha Ha Ha Hah.....!!!";
    score();
    document.getElementById("g6Sound").play();
    document.getElementById("g6").animate([
        { transform: 'translateY(0)' },
        { transform: 'translateY(-20px)' },
        { transform: 'translateY(45px)' },
        { transform: 'translateY(0)' }], {
        duration: 3230,
        easing: 'linear',
        iterations: 4 }); 
}

function casbaby() {
    text.innerHTML = "Hey, Everyone. Want to play with me???";
    score();
    document.getElementById("g2Sound").play();
    document.getElementById("g2").animate([
        { transform: 'rotate(0) translate3D(-50%, -50%, 0)' },
        { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)' }], {
        duration: 7200,
        iterations: 1 });  
}

function vau() {
    text.innerHTML = "Heh hah hah hah hah....!!!";
    score();
    document.getElementById("g3Sound").play();
    document.getElementById("g3").animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(-220px)' }], {
        duration: 7200,
        iterations: 1 }); 
}

function sun() {
    text.innerHTML = "I ... SEE ... YOU ... !!!";
    score();
    document.getElementById("g7Sound").play();
    document.getElementById("g7").animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.5)' },
        { transform: 'scale(1)' }], {
        duration: 6000,
        easing: 'linear' }); 
}

function casper() {
    text.innerHTML = "Let's go...I want to show you something!!!";
    score();
    document.getElementById("g1Sound").play();
    document.getElementById("g1").animate([
        { transform: 'translateX(0px)' },
        { transform: 'translateX(240px)' }], {
        duration: 8100,
        iterations: 1 });  
}

function bulu() {
    text.innerHTML = "Hoh Hoh Ha Ha Hah Hah Hah Hah ...Ha Ha Ha...Ha Ha Ha...!!!";
    score();
    document.getElementById("g5Sound").play();
    document.getElementById("g5").animate([
        { transform: 'rotate(0) scale(1)' },
        { transform: 'rotate(-20deg) scale(1.5)' },
        { transform: 'rotate(45deg) scale(1)' },
        { transform: 'rotate(0) scale(1)' }], {
        duration: 3100,
        easing: 'linear',
        iterations: 4 }); 
}

function girl() {
    text.innerHTML = "I Am Waiting For You!!!";
    score();
    document.getElementById("g4Sound").play();
    document.getElementById("g4").animate([
        { transform: 'translate(0%, 0%) scale(1)' },
        { transform: 'translate(-30%, -30%) scale(2)' },
        { transform: 'translate(0%, 0%) scale(1)' }], {
        duration: 2500,
        easing: 'linear' }); 
}