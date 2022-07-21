const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const btn = document.querySelector('.btn');
const body = document.querySelector('body');

burger.addEventListener('click', ()=> {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('fixed');
});
document.querySelectorAll('.menu_item-link').forEach(item => 
    item.addEventListener('click',() => {
            burger.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('fixed');
    }
));
btn.querySelectorAll("[class]").forEach(item => 
    item.addEventListener('click',()=>{
            burger.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('fixed');
    }
));

window.addEventListener('resize',()=>{
    if(window.innerWidth > 767){
        burger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('fixed');
        console.log('WORK')
    }
});

document.querySelector('.footer_logo').addEventListener("click", function(event){
    event.preventDefault();
});

document.querySelectorAll('.footer-info_socios-link').forEach( item => {
    item.addEventListener("click", function(event){
        event.preventDefault();
    })
});



// SWIPER SETTINGS 
const swiper = new Swiper('.swiper',{
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
        nextEl: '.swiper-leaf-next',
        prevEl: '.swiper-leaf-prev',
      },
    pagination: {
        el: ".swiper-pagination-main",
        clickable: true,
    },
    breakpoints: {
        1200:{
            slidesPerView: 3,
        },
        768:{
            slidesPerView: 2,
        },
        100:{
            slidesPerView: 1,
        }
    }
});