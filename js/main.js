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
    
/* // */

