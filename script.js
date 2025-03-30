var arr = ["img1.avif","img2.avif","img3.avif","img4.avif","img5.avif","img6.avif","img7.avif",];

var forward = document.querySelector(".ri-arrow-right-s-line")
var back = document.querySelector(".ri-arrow-left-s-line")
var img = document.querySelector("img")
var i = 0;
img.src = arr[0];

forward.addEventListener("click",function(){
    if(arr.length-1>i){
        i++;
        img.src = `${arr[i]}`;
    }
})


back.addEventListener("click",function(){
    if(i>0){
        i--;
        img.src = `${arr[i]}`;
    }
})