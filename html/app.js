const items = document.querySelectorAll('.gallery-item');

for (const item of items) {
    item.addEventListener('click', () => {
        clearActiveClasses();

        item.classList.add('active');
    })
}

function clearActiveClasses() {
    items.forEach((item) => {
        item.classList.remove('active');
    })
}

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