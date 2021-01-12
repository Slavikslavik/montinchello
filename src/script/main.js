'use strict';
//
const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
    console.log(anchor);
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href');
    console.log(blockID);
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

//
let left_img = document.querySelector('.left_img');
console.log(left_img);
let right_img = document.querySelector('.right_img');
console.log(right_img);

left_img.addEventListener('mousemove',function(event){
    left_img.style.transform = `translate(20px,20px)`;
    left_img.style.transitionDuration = `0.5s`;

});
right_img.addEventListener('mousemove',function(event){
    right_img.style.transform = `translate(-60px,20px)`;
    right_img.style.transitionDuration = `0.5s`;
});

function default_img (event){
    this.style.transform = `translate(0,0)`;
}
left_img.addEventListener('mouseout',default_img);
right_img.addEventListener('mouseout',default_img);


//
let header_nav = document.querySelector('.header_nav');
console.log(scroll);

window.addEventListener('scroll', function(e){
  console.log(window.pageYOffset);
    if(window.pageYOffset > 100){
      header_nav.classList.add('header_nav_scroll');
    } else {
      header_nav.classList.remove('header_nav_scroll');
    }
});

//
let button_one = document.querySelector('.what_we_do-button');

let button_two = document.querySelector('.what_we_do-button2');


button_one.addEventListener('click',function(e){
  e.preventDefault();

  let item = document.querySelector('.button_one');
  
  if(item.classList.contains('content_display_none')){

    item.classList.remove('content_display_none');

  } else {
    item.classList.add('content_display_none');
  }
  
});

button_two.addEventListener('click',function(e){
  e.preventDefault();

  let item = document.querySelector('.button_two');
  
  if(item.classList.contains('content_display_none2')){

    item.classList.remove('content_display_none2');

  } else {
    item.classList.add('content_display_none2');
  }
  
});
