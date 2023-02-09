import Swiper from 'swiper';

const mainTopSlider = new Swiper('.main-top__speakers', {
    slidesPerView: 'auto',
    resistance: true,
    resistanceRatio: 0,
    centeredSlides: true,
    observer: true, 
    observeParents: true,
    breakpoints: {
        600: {
            centeredSlides: false,
        }
    },
});