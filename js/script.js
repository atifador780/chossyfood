$(function ($) {
    var MainNav = $('.chossyNav'),
        wIn = $(window);
    var menuofset = MainNav.offset().top;
    wIn.on('scroll', function () {
        var scrol = wIn.scrollTop();
        if (scrol > menuofset) {
            MainNav.addClass('menufix');
        } else {
            MainNav.removeClass('menufix');
        }
    })

    $('#myNav ul li').on('click', function () {
        $('#myNav ul li').removeClass('active');
        $(this).toggleClass('active');
    })

    $('.banner_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1200,
        arrows: true,
        prevArrow: '<i class="fas fa-angle-left ar_left"></i>',
        nextArrow: '<i class="fas fa-angle-right ar_right"></i>',
    });
    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });

    // bind filter button click
    $('.filters-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
    $('button').on('click', function () {
        $('button').removeClass('active');
        $(this).toggleClass('active');
    });

    $('.parallax-window').parallax({
        speed: 3,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });



    $('.testimonial_slide').slick({
        slidesToShow1: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: true,
        infinite: true,
        pauseOnHover: false,
        focusOnSelect: true,
        prevArrow: '<i class="fas fa-angle-left tr_left"></i>',
        nextArrow: '<i class="fas fa-angle-right tr_right"></i>',
    });

    wIn.on('load', function () {
        $('.preloader_part').delay(500).fadeOut(2000);
    });

});
