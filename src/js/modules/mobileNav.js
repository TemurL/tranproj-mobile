const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.mobile-menu');

const btnClick = () => {
    if (!menu.classList.contains('active')) {
        menu.classList.add('active');
        menu.style.top = '60px';
    } else {
        menu.classList.remove('active');
        menu.style.top = '-540px';
    }
}

const menuClick = () => {
    menu.classList.remove('active');
    menu.style.top = '-540px';
}

export {
    btn,
    menu,
    btnClick,
    menuClick
}