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

//Carousel

let sliderIndex = 0;

const showSlide = (index) => {
    const slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot-nav');

    if (index > slides.length - 1) {
        sliderIndex = 0;
    }
    if (index < 0) {
        sliderIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove('active-dot');
    }

    slides[sliderIndex].style.display = "block";
    dots[sliderIndex].classList.add('active-dot');
}

document.querySelectorAll(".dot-nav").forEach((dot) => {
    dot.addEventListener('click', (e) => {
        let dots = Array.prototype.slice.call(document.querySelectorAll('.dot-nav')),
            index = dots.indexOf(e.target);
        showSlide(sliderIndex = index);
    });
});

showSlide(sliderIndex);