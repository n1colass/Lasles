const burger = document.querySelector('.burger');
const menuList = document.querySelector('.menu_list');

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active');
    menuList.classList.toggle('active');
});

document.querySelectorAll('.menu_item-link').forEach(item => 
item.addEventListener('click',() => {
    burger.classList.toggle('active');
    menuList.classList.toggle('active');
}))