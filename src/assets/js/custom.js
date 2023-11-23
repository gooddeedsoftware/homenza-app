import $ from 'jquery';
import 'owl.carousel/dist/owl.carousel.min.js';

$(document).ready(function() {
    $('.owl-carousel.chapter-slider').owlCarousel({
        dots: false,
        margin: 0,
        loop: true,
        nav: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }

    });

    $('.owl-carousel.brand-slider').owlCarousel({
        dots: false,
        margin: 30,
        nav: false,
        loop: true,
        autoplay: true,           
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });

    $('.owl-carousel.gallery-slider').owlCarousel({
        dots: false,
        margin: 20,
        nav: true,
        loop: false,
        items: 1,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
    });

    $('.owl-carousel.house-gallery-slider').owlCarousel({
        dots: true,
        margin: 20,
        nav: true,
        loop: false,
        items: 1,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
    });

    $('.owl-carousel.cities-slider').owlCarousel({
        dots: false,
        margin: 20,
        nav: true,
        loop: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2,
            },
            1000: {
                items: 5
            }
        }
    });
    $(".owl-carousel.testimonials-slider").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            680: {
                items: 2,
                nav: false,
                loop: false
            },
            1000: {
                items: 3,
                nav: true
            }
        }
    });

});

document.getElementById("year").innerHTML = new Date().getFullYear();
$('ul.dropdown-menu.mega-dropdown-menu').on('click', function(event) {
    event.stopPropagation();
});

$(".tab-bar a").click(function() {
    $(".tab-bar a").removeClass("active");
    $(this).addClass("active");
});

$(".carousel-indicators button").click(function() {
    $(".carousel-indicators button").removeClass("active");
    $(this).addClass("active");
});