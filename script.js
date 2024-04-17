// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Navigation Menu
window.onscroll = function() {
    const header = document.querySelector('header');
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

// Responsive Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menu.style.display = 'block';
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menu.style.display = 'none';
        menuOpen = false;
    }
});

// Additional Enhancements - Load animations for sections
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.classList.add('visible');
    });
});

