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

function show() {
    fb[0].style.display = "flex";
    setTimeout(()=>fb[0].classList.remove('transperency_1'),50);
  }


function hide() {
    fb[0].classList.add('transperency_1');
    setTimeout(()=>fb[0].style.display = "none",1050);
}



document.getElementsByClassName('feedback')[0].onclick = function() {show()};
document.getElementsByClassName('exit')[0].onclick = function() {hide()};

/* Form Validation */
let form = document.querySelector('.form');

let fields = form.querySelectorAll('.field');

let validateBtn = form.querySelector('.formButton');

console.log(fields);
form.addEventListener('submit', function () {
    event.preventDefault()

    for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
          console.log('field is blank', fields[i])
          //Виведення помилки
          fields[i].classList.add('error')

          fields[i].placeholder='Поле обязательно для заполнения'
        }
      }
  });
  
  for (let item of fields){
    item.addEventListener('focus', function(event) {
        event.target.classList.remove('error');
        event.target.placeholder = '';
    })
    
}