
/*!
 * khedma v0.1
 * Copyright 2020.
 */


$(document).ready(function () {
    "use strict";

    /*======================================
     WOW Animation
     ======================================*/
     var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
        }
        , scrollContainer: true // optional scroll container selector, otherwise use window
    }
    );
    wow.init();

    /*======================================
     OwlCarousel our works
     ======================================*/
    $('.list_our_works').owlCarousel({
        loop: true,
        items:3,
        margin: 10,
        responsiveClass: true,
        nav: false,
        dots: true,
        responsive:{
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:false,
        }
        }
    })


});

$(window).scroll(function() {

    // Add Class "NavbarFixed" on Navbar
    if( $(this).scrollTop() > 100 ) {

        $('.header-area').addClass('sticky');

    } else { $('.header-area').removeClass('sticky');}

    

});