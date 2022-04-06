"use strict";

const btnHide = document.getElementById('btn-hide');
const btnShow = document.getElementById('btn-show');

const SideBar = document.querySelector(".side-menu__ul");

const closeMenu = () => {
    SideBar.classList.remove('show');
    SideBar.classList.add('hide');
    btnShow.classList.remove('hidden');
}

const openMenu = () => {
    btnShow.classList.add('hidden');
    SideBar.classList.add('show');
    SideBar.classList.remove('hide');
}

btnShow.addEventListener('click', () => {
    openMenu();
});

btnHide.addEventListener('click', () => {
    closeMenu();
});