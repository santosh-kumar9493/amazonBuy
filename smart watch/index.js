var imgtag=document.getElementById('watch-img');
var heatbeat=document.getElementById('heart-beats');
var featureList=Array.from(document.getElementsByClassName('features'));
var timenow=document.getElementById('time');
var date =new Date();
var heartImg=document.getElementById('heart-img');



console.log(featureList);
console.log(timenow);
console.log(heatbeat);
function  change(color){
    console.log("cj");
    imgtag.src="./"+color+".png";
}
featureList[0].addEventListener('click',function(){
    heatbeat.pause();
    timenow.style.display="inline-block";
    heartImg.style.display="none";
})
featureList[1].addEventListener('click',function(){
    heatbeat.play();
    timenow.style.display="none";
    heartImg.style.display="inline-block";

})

setInterval(function(){
    var date =new Date();
    timenow.innerHTML= date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds();
},1000);