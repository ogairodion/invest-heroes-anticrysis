import $ from 'jquery';
import Swiper from 'swiper';

let windowWidth; 

windowWidth = $(window).width();
adaptiveWhat(windowWidth);

$(window).on('resize', function() {
    windowWidth = $(window).width();
    adaptiveWhat(windowWidth);
});

function adaptiveWhat(windowWidth) {
    if (windowWidth < 991) {
        $('.what__items').addClass('swiper-container');
        $('.what__items-wrapper').addClass('swiper-wrapper');
        $('.what__item').addClass('swiper-slide');

        const whatSlider = new Swiper('.what__items', {
            slidesPerView: 'auto',
            resistance: true,
            resistanceRatio: 0,
            spaceBetween: 20,
        });
    } else {
        $('.what__items').removeClass('swiper-container swiper-container-initialized swiper-container-horizontal');
        $('.what__items-wrapper').removeClass('swiper-wrapper');
        $('.what__items-wrapper').removeAttr('style');
        $('.what__item').removeClass('swiper-slide swiper-slide-active swiper-slide-prev swiper-slide-next').removeAttr('style');
    }
}
