/* Menu mobile responsive */

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');

    if (menuMobile.classList.contains('mobile-menu-open')) {
        menuMobile.classList.remove('mobile-menu-open');
        document.querySelector('.mobile-icon').src = "../img/menu.svg";
    } else {
        menuMobile.classList.add('mobile-menu-open');
        document.querySelector('.mobile-icon').src = "../img/close.svg";
    }
}