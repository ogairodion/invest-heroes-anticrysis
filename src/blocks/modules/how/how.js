import $ from 'jquery';
import Swiper from 'swiper';

let windowWidth; 

windowWidth = $(window).width();
adaptivehow(windowWidth);

$(window).on('resize', function() {
    windowWidth = $(window).width();
    adaptivehow(windowWidth);
});

function adaptivehow(windowWidth) {
    if (windowWidth < 991) {
        $('.how__items-wrapper').addClass('swiper-container');
        $('.how__items').addClass('swiper-wrapper');
        $('.how__item').addClass('swiper-slide');

        const howSlider = new Swiper('.how__items-wrapper', {
            slidesPerView: 'auto',
            resistance: true,
            resistanceRatio: 0,
        });
    } else {
        $('.how__items-wrapper').removeClass('swiper-container swiper-container-initialized swiper-container-horizontal');
        $('.how__items').removeClass('swiper-wrapper');
        $('.how__items').removeAttr('style');
        $('.how__item').removeClass('swiper-slide swiper-slide-active swiper-slide-prev swiper-slide-next').removeAttr('style');
    }
}

const howBottomSlider = new Swiper('.how__bottom-wrapper', {
    slidesPerView: 1,
    resistance: true,
    spaceBetween: 42,
    resistanceRatio: 0,
    autoHeight: true,
    breakpoints: {
        767: {
            slidesPerView: 3,
        }
    }
});
