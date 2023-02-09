import $ from 'jquery';
import Swiper from 'swiper';
// eslint-disable-next-line no-unused-vars
global.$ = global.jQuery = $;

let windowWidth; 

windowWidth = $(window).width();
adaptive(windowWidth);

$(window).on('resize', function() {
    windowWidth = $(window).width();
    adaptive(windowWidth);
});

function adaptive(windowWidth) {
    switch(true) {
        case windowWidth < 991 && $('.for-whom__mobile .for-whom__maybe-img').length == 0: 
            $('.for-whom__mobile').append($('.for-whom__maybe-img'));
        break;
        case windowWidth > 991 && $('.for-whom__maybe .for-whom__maybe-img').length == 0: 
            $('.for-whom__maybe').append($('.for-whom__maybe-img'));
        break;
    }
}

const forWhomSlider = new Swiper('.for-whom__points', {
    slidesPerView: 1,
    resistance: true,
    resistanceRatio: 0,
    spaceBetween: 33,
    breakpoints: {
        767: {
            slidesPerView: 'auto',
            spaceBetween: 46,
        }
    }
});