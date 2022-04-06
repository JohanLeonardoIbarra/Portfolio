"use-strict";

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