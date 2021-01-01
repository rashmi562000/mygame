score = 0;
mousesound = new Audio('/sounds/whistle_mouse.mp3');
catsound = new Audio('/sounds/ouch.mp3');
setTimeout(() => {
    mousesound.play()
}, 1000);
document.onkeydown = function (e) {

    console.log("key code is : ", e.keyCode)
    if (e.keyCode == 38) { //upper
        mouse = document.querySelector('.mouse');
        my = parseInt(window.getComputedStyle(mouse, null).getPropertyValue('bottom'));
        my1 = parseInt(window.getComputedStyle(mouse, null).getPropertyValue('top'));
        if (my1 > 100) {
            mouse.style.bottom = (my + 100) + "px";
        }
        // mouse=document.querySelector('.mouse');
        // mouse.classList.add('animatemouse');
        // setTimeout(() => {
        //     console.log("yes")
        //     mouse.classList.remove('animatemouse')
        // },700);

    }
    if (e.keyCode == 40) {//lower
        mouse = document.querySelector('.mouse');
        my = parseInt(window.getComputedStyle(mouse, null).getPropertyValue('bottom'));
        if (my >0) {
            mouse.style.bottom = (my - 100) + "px";
        }
    }
    if (e.keyCode == 39) {//right
        mouse = document.querySelector('.mouse');
        mx = parseInt(window.getComputedStyle(mouse, null).getPropertyValue('left'));
        mx1 = parseInt(window.getComputedStyle(mouse, null).getPropertyValue('right'));
        if (mx1 > 0) {
            mouse.style.left = (mx + 20) + "px";
        }
    }
    if (e.keyCode == 37) { //left
        mouse = document.querySelector('.mouse');
        mx = parseInt(window.getComputedStyle(mouse, null).getPropertyValue('left'));
        if (mx >= 0) {
            mouse.style.left = (mx - 40) + "px";
        }
    }
}
var myVar = setInterval(myTimer ,5000);
function myTimer() 
 {
    var x=Math.floor((Math.random()*5));
    var y=Math.floor((Math.random() * 2) + 1);
    if(y==1){
        document.querySelector('.catend').style.bottom= (x*100)+"px";
        document.querySelector('.shooting').style.left= (x*20)+"%";
       // document.querySelector('.catend').style.animationDuration = a+"s";
        document.querySelector('.catend').style.transform = "scaleX(-1)";
        document.querySelector('.catend').style.animationDirection = "reverse";
    }
    score += 1;
    scoreinc(score);
}
var end = setInterval(endofgame );
function endofgame()  {
    gameover = document.querySelector('.gameover');
    again = document.querySelector('.again');
    mouse = document.querySelector('.mouse');
    catend = document.querySelector('.catend');
    shooting = document.querySelector('.shooting');

    mx = parseInt(window.getComputedStyle(mouse, null).getPropertyValue('left'));
   my = parseInt(window.getComputedStyle(mouse, null).getPropertyValue('top'));
    cx = parseInt(window.getComputedStyle(catend, null).getPropertyValue('left'));
    cy = parseInt(window.getComputedStyle(catend, null).getPropertyValue('top'));
    sx = parseInt(window.getComputedStyle(shooting, null).getPropertyValue('left'));
    sy = parseInt(window.getComputedStyle(shooting, null).getPropertyValue('top'));

    offsetx = Math.abs(mx - cx);
   offsety = Math.abs(my - cy);
   offsetx1 = Math.abs(mx - sx);
   offsety1 = Math.abs(my - sy);

    scorrr = document.getElementById('scores');

    if (offsetx <=10 && offsety <50 || offsetx1 <=5 && offsety1 <10 ) {
        scorrr.style.margin = "auto";
        scorrr.style.color = "blue";
        scorrr.style.position = "relative";
        gameover.style.visibility = "visible";
        again.style.visibility = "visible";
        clearInterval(myVar)
        document.querySelector('.catend').style.webkitAnimationPlayState = "paused";
        document.querySelector('.shooting').style.webkitAnimationPlayState = "paused";
        document.querySelector('.shooting').style.backgroundImage = "url('images/bomb.gif')";
        document.querySelector('.mouse').style.backgroundImage = "url('images/bomb.gif')";
        
        // mx = parseInt(window.getComputedStyle(catend, null).getPropertyValue('left'));
        // catend.style.left = (mx) + "px";
        mousesound.pause()
        catsound.play()
        setTimeout(() => {
            catsound.pause();
        },);

    }
    // else{
        
        // score += 1;
        // scoreinc(score);
        // cross=false;
        // setTimeout(() => {
        //     cross = true;
        // }, 1000);
        
        // setTimeout(() => {
        //     animedur = parseFloat(window.getComputedStyle(catend, null).getPropertyValue('animation-duration'));
        //     var x = Math.floor((Math.random() * 20) + 1)
        //     newdur = animedur - x;
        //     catend.style.animationDuration = x +"s";
            

        // }, 30000);
    // }
}

    
function scoreinc(score) {
    document.getElementById("scores").innerHTML = "your score is :" + score



}