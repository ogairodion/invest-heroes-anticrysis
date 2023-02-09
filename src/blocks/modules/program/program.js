import $ from 'jquery';

$(document).on('click', '.dropdown-top', function() {
    $(this).parent().toggleClass('open');
});

let windowWidth; 

windowWidth = $(window).width();
adaptiveProgram(windowWidth);

$(window).on('resize', function() {
    windowWidth = $(window).width();
    adaptiveProgram(windowWidth);
});

function adaptiveProgram(windowWidth) {
    $('.program__item').each(function() {
        switch(true) {
            case windowWidth < 991 && $('.program__item-title--mobile .program__item-title', $(this)).length == 0: 
                $('.program__item-title--mobile', $(this)).append($('.program__item-title', $(this)));
            break;
            case windowWidth > 991 && $('.program__item-top .program__item-title', $(this)).length == 0: 
                $('.program__item-top', $(this)).append($('.program__item-title', $(this)));
            break;
        }
    });
}