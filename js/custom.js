/**********************************************
                    SERVICES

***********************************************/

/* jQuery document ready method is use to make a function available after the page is ready*/
$(function () {
    new WOW().init();
});

/************************************************************************
                              WORK
                    
 http://dimsemenov.com/plugins/magnific-popup/documentation.html
 Popup initialization code should be executed after document ready method
 here is the long form:
 
            $(document).ready(function() {
              $('.image-link').magnificPopup({type:'image'});
            });
**************************************************************************/
/* Here is the short form */
$(function () {
    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }

    });
});

/************************************************************************
                              TEAM
                    
 https://owlcarousel2.github.io/OwlCarousel2/docs/started-installation.html
Now call the Owl initializer function and your carousel is ready.

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
**************************************************************************/
$(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        //responsive for the carousel Team
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1

            },
            // breakpoint from 480 up
            480: {
                items: 2

            },
            // breakpoint from 768 up
            768: {
                items: 3

            }
        }
    });

});

/************************************************************************
                              TESTIMONIALS CAROUSEL
                    
 
**************************************************************************/

$(function () {

    $("#customer-testimonials-wrapper").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true
    });

});

/**********************************************
                    COUNTER

***********************************************/
$(function () {
    $('.counter').counterUp({        
        delay: 10,
                time: 2000      
    });
});

/**********************************************
                    CLIENTS

***********************************************/

$(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        //responsive for the carousel clients
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1

            },
            // breakpoint from 480 up
            480: {
                items: 3

            },
            // breakpoint from 768 up
            768: {
                items: 5

            },
            // breakpoint from 992 up
            992: {
                items: 6

            }
        }
    });

});
/**********************************************
                    NAVIGATION
   Show/Hide transparent black navigation
***********************************************/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            // hide navigation bar and also fadeout back to top buttom
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();

        } else {
            // show navigation bar
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();


        }
    });
});

//smooth scrolling code with advance easing effect
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        // get/return id like #about, #work, #pricing etc..
        var section = $(this).attr("href")
        $("html, body").animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

// close the mobile menu on click
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});