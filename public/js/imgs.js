



var pre_but =document.getElementById('but_left');
var nex_but =document.getElementById('but_right');
var change =document.querySelectorAll(".modimg");
var imgs =document.getElementById('imgb');

var index=0;

nex_but.addEventListener('click',function(){
    
    if(index>=change.length-1){
        index=-1;
    }
    index++;
    imgs.src= change[index].src;
    
    
});

pre_but.addEventListener('click',function(){
    
    
    if(index<=0){
        index=change.length;
    }
    index--;
    imgs.src= change[index].src;
    
    
});