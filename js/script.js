const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const btn = document.querySelector('.btn');

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

document.querySelectorAll('.menu_item-link').forEach(item => 
    item.addEventListener('click',() => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    }
));
btn.querySelectorAll("[class]").forEach(item => 
    item.addEventListener('click',()=>{
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    }
));

const swiper = new Swiper('.swiper',{
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination-main",
        clickable: true,
    }
});