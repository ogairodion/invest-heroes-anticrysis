import { Swiper, Lazy, Navigation } from 'swiper';

Swiper.use([Lazy, Navigation,]);

const reviewsSlider = new Swiper('.reviews__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    resistance: true,
    resistanceRatio: 0,
    lazy: true,
    loop: true,
    navigation: {
        nextEl: ".reviews__slider-arrow--next",
        prevEl: ".reviews__slider-arrow--prev",
    },
    autoHeight: true,
});