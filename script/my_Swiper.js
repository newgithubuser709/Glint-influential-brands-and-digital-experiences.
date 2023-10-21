const swiper1 = new Swiper('.clint_img_swiper', {
    speed: 1000,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        dynamicBullets: true,
    },
    autoplay: {
        delay: 1700,
        disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        100: {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true
        },
        // when window width is >= 600px
        600: {
            slidesPerView: 2,
            spaceBetween: 0,
            loop: true
        },

        // when window width is >= 640px
        815: {
            slidesPerView: 3,
            spaceBetween: 0,
            loop: true
        }
    }

});


var swiper2 = new Swiper(".testimonial-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 1700,
        disableOnInteraction: false,
    },
});


var swiper3 = new Swiper(".img_gallery_swiper", {
    speed: 500,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },


})



let work_img_gallery_text_h3 = document.querySelector('.work_img_gallery_text_h3');
swiper3.on('slideChange', function(ec) {
    setTimeout(() => {
        if (swiper3.realIndex == 0) {
            work_img_gallery_text_h3.innerHTML = 'shutterbuc'
        }

        if (swiper3.realIndex == 1) {
            work_img_gallery_text_h3.innerHTML = 'woodcraft'
        }

        if (swiper3.realIndex == 2) {
            work_img_gallery_text_h3.innerHTML = 'the beetle'
        }

        if (swiper3.realIndex == 3) {
            work_img_gallery_text_h3.innerHTML = 'Grow Green'
        }

        if (swiper3.realIndex == 4) {
            work_img_gallery_text_h3.innerHTML = 'guitarist'
        }

        if (swiper3.realIndex == 5) {
            work_img_gallery_text_h3.innerHTML = 'palmeira'
        }
    }, 300);
});