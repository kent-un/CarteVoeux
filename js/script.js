var lampe = document.getElementById("rect6746");
var lumiere = document.getElementById("rect6811");
var activated= false;

lampe.addEventListener("click", function(){
    if(!activated){
    lumiere.style.display="block";
    activated=true;}
    else{
        lumiere.style.display="none";
        activated=false;
    }

})
var player = document.querySelector('#player');
var svg1 = document.getElementById("svg1")
var boule = document.getElementById("layer3");
var modal = document.getElementById("modalBoule");
var snow = document.getElementById("snow");
var bouleCircle=document.getElementById("boule");
var boulesvg= document.getElementById("boulesvg");

var activatedMod = false;
boule.addEventListener("click", function(){
    if(!activatedMod){
        boule.style.visibility="hidden";
        modal.style.visibility="visible";
        svg1.style.filter="blur(10px)";
        player.play();
        player.currentTime=5;
        activatedMod=true;
    } 
})
modal.addEventListener("click", function(){
    if(activatedMod==true){
    boule.style.visibility="visible";
    modal.style.visibility="hidden";
    svg1.style.filter="none";
    player.pause();
    activatedMod=false;
}

})


boulesvg.addEventListener("mouseover", function(){
    setInterval(function() {
    snow.style.backgroundImage="url(https://i.imgur.com/uYjnk8N.png), url(https://i.imgur.com/iAGD6MA.png), url(https://i.imgur.com/hIJDjbg.png)";
    snow.style.animation="snow 10s linear infinite"}, 800);
})


var bouleGuirlande = document.getElementsByClassName("bouleGuirlande");

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}
function color(random, classe){
    switch(random){
        case 0: bouleGuirlande[classe].style.fill="yellow";
        break;
        case 1: bouleGuirlande[classe].style.fill="blue";
        break;
        case 2: bouleGuirlande[classe].style.fill="green";
        break;
        case 3: bouleGuirlande[classe].style.fill="red";
        break;
        case 4: bouleGuirlande[classe].style.fill="white";
        break;
    }
}
function guirlande(){
for(var i=0; i<11 ; i++){
    var random1=getRandomInt(5);
    color(random1, i)
}}
var intervalGuirlande = setInterval(guirlande, 800);

var rectangleEcran= document.getElementById('rect977');
var ecranHover= document.getElementById('texteEcran');
var form=document.getElementById('modalForm');
var close=document.getElementById('close');
rectangleEcran.addEventListener("mouseenter", function(){
    ecranHover.style.display="block";
})
ecranHover.addEventListener("mouseleave", function(){
    ecranHover.style.display="none";
})


var formActivated = false;
ecranHover.addEventListener('click', function(){
    if(!formActivated){
    form.style.display="block";
    svg1.style.filter="blur(10px)";
    formActivated=true;}
})
close.addEventListener("click", function(){
    if(formActivated){
    form.style.display="none";
    svg1.style.filter="none";
    formActivated=false;
    }
})