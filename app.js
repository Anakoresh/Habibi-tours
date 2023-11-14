const slides = document.getElementsByClassName("home-right-tour");
let currentSlide = 0;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlide].style.display = "block";
}

const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");

leftArrow.addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlides();
});

rightArrow.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlides();
});

showSlides();

const menu = document.querySelector('header');
const menuicon = document.querySelector('.menu-icon');
const section = document.querySelector('section');
const footer = document.querySelector('footer');
const menuitems = document.querySelectorAll('.menu-item');

menuicon.addEventListener('click', () => {
    menu.style.display = "block";
    footer.classList.add('d-none');
    section.classList.add('d-none');
})
