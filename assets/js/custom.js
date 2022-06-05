(function ($) {
    "use strict";


    //Active menu
    //    const currentLocation = location.href;
    //    const menuItem = document.querySelectorAll('ul li a');
    //    const menuLength = menuItem.length;
    //    for (let i = 0; i < menuLength; i++) {
    //        if (menuItem[i].href === currentLocation) {
    //            menuItem[i].className = "active";
    //        }
    //    }


    //sticky menu
    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 200) {
            $('.sticky_top').addClass('sticky');
        } else {
            $('.sticky_top').removeClass('sticky');
        }
    });


    //Mobile menu
    $('.cross-btn').on('click', function (event) {
        //$(this).toggleClass('h-active');
        $('.main-nav').toggleClass('slidenav');
    });
    $('.remove').on('click', function (event) {
        $('.main-nav').removeClass('slidenav');
    });

    $(".main-nav .fas").on('click', function (event) {
        var $fl = $(this);
        $(this).parent().siblings().find('.sub-menu').slideUp();
        $(this).parent().siblings().find('.fas').addClass('fa-caret-down');
        if ($fl.hasClass('fa-caret-down')) {
            $fl.removeClass('fa-caret-down').addClass('fa-caret-up');
        } else {
            $fl.removeClass('fa-caret-up').addClass('fa-caret-down');
        }
        $fl.next(".sub-menu").slideToggle();
    });


    //Select design
    $('select').niceSelect();

    //Counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
    });

    //Home slider
    var swiper = new Swiper(".hero-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 0,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 4000
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //Review slider
    var swiper = new Swiper(".review-slider", {
        slidesPerView: 3,
        speed: 1500,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 4000
        },
        navigation: {
            nextEl: ".swiper-button-next-c",
            prevEl: ".swiper-button-prev-c",
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 2,
            },
            // when window width is >= 640px
            992: {
                slidesPerView: 3,
            }
        }
    });

}(jQuery));
