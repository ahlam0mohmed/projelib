var fcr = document.getElementById('fcreat');
var lo =document.getElementById('log');
var cr =document.getElementById('creat');
var log =document.getElementById('flog');



cr.addEventListener('click',function(){

    fcr.style.display="flex";
    log.style.display="none";
    
});
lo.addEventListener('click',function(){

    fcr.style.display="none";
    log.style.display="flex";
    
});