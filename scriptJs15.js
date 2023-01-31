let b1=document.querySelector('.sp1');
let redLine=document.querySelector('.line');
let img=document.querySelector('.image');
let up =document.querySelector('.ScrollUp');
window.addEventListener('scroll' , function () {
    console.log(window.scrollY);
    if (window.scrollY<=650 && window.scrollY>=100) {
        b1.style.fontSize=`${window.scrollY/6}px`;
        b1.style.paddingTop=`${window.scrollY}px`; 
    }
  
    if (window.scrollY<=800 && window.scrollY>=180) {
    redLine.style.width=`${window.scrollY/2}px`;
    img.style.marginRight=`${window.scrollY/1.4}px`;
    }
 if (window.scrollY<=1500 && window.scrollY>=1100) {
    up.style.fontSize=`${window.scrollY/20}px`;
 }

});

document.querySelector('.ScrollUp').addEventListener('click',function () {
    document.querySelector('.sp1').scrollIntoView({behavior:'smooth'})
})


document.querySelector('.sp1').addEventListener('click',function () {
    document.querySelector('.slide-text').scrollIntoView({behavior:'smooth'})
})