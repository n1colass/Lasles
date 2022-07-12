const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const headerBtn = document.querySelector('.header_btn');

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
headerBtn.querySelectorAll("[class]").forEach(item => 
    item.addEventListener('click',()=>{
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    }
));