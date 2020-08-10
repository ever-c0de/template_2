'use strict'

/* Slider section */

$(document).ready(function(){
    $('.slider').slick({
        // autoplay
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        
        // 

        // fade
        useTransform: true,
        speed: 1000,
        fade: true,
        cssEase: 'cubic-bezier(0.22, 1, 0.36, 1)'
        
    });
});
    
/* /Slider section */

/* Form section */

let fb = document.getElementsByClassName('frame');
fb[0].style.display = "none";
let f = document.getElementsByClassName('form');
fb[0].style.display = "none";

function show() {
    fb[0].style.display = "flex";
  }


function hide() {
    fb[0].style.display = "none";
}



document.getElementsByClassName('feedback')[0].onclick = function() {show()};
document.getElementsByClassName('exit')[0].onclick = function() {hide()};
