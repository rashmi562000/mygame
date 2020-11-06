score=0;
cross=true;
mousesound = new Audio('/sounds/whistle_mouse.mp3');
catsound = new Audio('/sounds/ouch.mp3');
setTimeout(() => {
    mousesound.play()
},1000);
document.onkeydown = function(e){
    
    console.log("key code is : ", e.keyCode)
    if(e.keyCode==38){
        mouse=document.querySelector('.mouse');
        mouse.classList.add('animatemouse');
        setTimeout(() => {
            console.log("yes")
            mouse.classList.remove('animatemouse')
        },700);
    }
    if(e.keyCode==39){
        mouse=document.querySelector('.mouse');
        mx=parseInt(window.getComputedStyle(mouse, null).getPropertyValue('left'));
        mouse.style.left = (mx+200)+"px";
    }
    if(e.keyCode==37){
        mouse=document.querySelector('.mouse');
        mx=parseInt(window.getComputedStyle(mouse, null).getPropertyValue('left'));
        mouse.style.left = (mx-200)+"px";
    }
}
setInterval(() => {
gameover=document.querySelector('.gameover');
mouse=document.querySelector('.mouse');
cat=document.querySelector('.cat');


    mx=parseInt(window.getComputedStyle(mouse, null).getPropertyValue('left'));
    my=parseInt(window.getComputedStyle(mouse, null).getPropertyValue('top'));
    cx=parseInt(window.getComputedStyle(cat, null).getPropertyValue('left'));
    cy=parseInt(window.getComputedStyle(cat, null).getPropertyValue('top'));

    offsetx=Math.abs(mx-cx);
    offsety=Math.abs(my-cy);

    if(offsetx <50 && offsety<50){
    gameover.style.visibility = "visible";
    catend=document.querySelector('.catend');
        mx=parseInt(window.getComputedStyle(catend, null).getPropertyValue('left'));
        catend.style.left = (mx)+"px";
        mousesound.pause()
        catsound.play() 
        setTimeout(() => {
            catsound.pause();
        },1000);

    }
    else if(offsetx < 100 && cross) {
        score+=1;
        scoreinc(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
        setTimeout(() => {
            
            animedur=parseFloat(window.getComputedStyle(cat, null).getPropertyValue('animation-duration'));
            newdur=animedur - 0.1;
            cat.style.animationDuration = newdur + "s";
            
        }, 500);
    } 
}, 100);
function scoreinc(score){
    document.getElementById("scores").innerHTML = "your score is :" + score

}