
//
let btn_open = document.querySelector('.open-modal');
let btn_close = document.querySelector('.btn-close');
let modal_container = document.querySelector('.modal-container');

btn_open.addEventListener('click', () => {
    modal_container.classList.add('active');
});
btn_close.addEventListener('click', () => {
    modal_container.classList.remove('active');
});
modal_container.addEventListener('click', (e) => {
    if (e.target.closest('modal-container')) {
        modal_container.classList.add('active');
    } else {
        e.target.classList.remove('active');
    }
});

var swiper = new Swiper('.mySwiper', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
});
var swiper2 = new Swiper('.mySwiper2', {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: swiper,
    },
});

// Get all the images in the modal
const modalImages = document.querySelectorAll('.mySwiper2 .swiper-slide img');

// Attach a click event listener to each image
modalImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        // Show the modal
        modal_container.classList.add('active');

        // Initialize a new Swiper for the clicked image
        var swiper = new Swiper('.modal-swiper', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            initialSlide: index,
        });
    });
});
