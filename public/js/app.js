var pre_but =document.getElementById('but_left');
var nex_but =document.getElementById('but_right');
var change =document.querySelectorAll(".modimg");
var imgs =document.getElementById('imgb');
var num=document.getElementById('num');
var con =document.getElementsByClassName('add');

var n=0;

var index=0;


nex_but.addEventListener('click',function(){
    
    
    
    if(index>=change.length){
        index=0;
    }
    
    imgs.src= change[index].src;
    index++;
    
});

pre_but.addEventListener('click',function(){
    
    
    if(index<=0){
        index=change.length;
    }
    index--;
    imgs.src= change[index].src;
    
    
});






for(let i=0;i<con.length;i++){
    con[i].addEventListener('click',function () {
        n=n+1;
        num.innerText=n;
    
    });

}

function search(){
    const uname= document.getElementById("ser");
    var a, filter ,div;

    filter=uname.value.toUpperCase();
    div=document.getElementById("books");
    a=div.getElementsByTagName("p");
    d=div.getElementsByTagName("div");

    for (let ind = 0; ind < a.length; ind++) {
       txtValue=a[ind].textContent || a[ind].innerText;
       if (txtValue.toUpperCase().indexOf(filter) > -1) {
        d[ind].style.display = "";
      } else {
        d[ind].style.display = "none";
      }
    }
}




