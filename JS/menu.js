"use strict";

const btnHide = document.getElementById('btn-hide');
const btnShow = document.getElementById('btn-show');
const container = document.querySelector('.side-menu__container');

const SideBar = document.querySelector(".side-menu__ul");

container.classList.add('hide');

const closeMenu = () => {
    SideBar.classList.remove('show');
    SideBar.classList.add('hide');
    container.classList.add('hide');
    btnShow.classList.remove('hidden');
}

const openMenu = () => {
    btnShow.classList.add('hidden');
    SideBar.classList.add('show');
    container.classList.remove('hide');
    SideBar.classList.remove('hide');
}

btnShow.addEventListener('click', () => {
    openMenu();
});

btnHide.addEventListener('click', () => {
    closeMenu();
});