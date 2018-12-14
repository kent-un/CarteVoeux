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
    activatedMod=false;}
})

boulesvg.addEventListener("mouseover", function(){
    snow.style.backgroundImage="url(https://i.imgur.com/uYjnk8N.png), url(https://i.imgur.com/iAGD6MA.png), url(https://i.imgur.com/hIJDjbg.png)";
    snow.style.animation="snow 10s linear infinite";
})