// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Hero Slider
const heroSwiper = new Swiper('.hero .swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 0,
});

// Recruiters Carousel
const recruitersSwiper = new Swiper('.recruiters-carousel', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 15,
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

// Highlight Active Nav Link
const currentPage = window.location.pathname.split('/').pop();
const navLinksAll = document.querySelectorAll('.nav-links a');
navLinksAll.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});