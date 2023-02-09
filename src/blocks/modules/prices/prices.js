import $ from 'jquery';

let windowWidth; 

windowWidth = $(window).width();
adaptivePrices(windowWidth);

$(window).on('resize', function() {
    windowWidth = $(window).width();
    adaptivePrices(windowWidth);
});

function adaptivePrices(windowWidth) {
    if (windowWidth < 1199) {
        $('.prices__item').addClass('dropdown');
        $('.prices__item-top').addClass('dropdown-top');
        $('.prices__item-content').addClass('dropdown-content');
    } else {
        $('.prices__item').removeClass('dropdown');
        $('.prices__item-top').removeClass('dropdown-top');
        $('.prices__item-content').removeClass('dropdown-content');
    }
}
