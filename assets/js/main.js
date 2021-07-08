(function ($) {

  "use strict";

  $(window).on('load', function () {

    /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

    // Sticky Nav
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('.scrolling-navbar').css('background-color', 'white');
        $('.scrolling-navbar').addClass('top-nav-collapse');
        $('#header-wrap').addClass('sticky');
      } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
        $('.scrolling-navbar').css('background-color', 'transparent');
        $('#header-wrap').removeClass('sticky');
      }
    });

    // one page navigation
    // $('.navbar-nav').onePageNav({
    //   currentClass: 'active'
    // });

    /* Auto Close Responsive Navbar on Click
    ========================================================*/
    function close_toggle() {
      if ($(window).width() <= 768) {
        $('.navbar-collapse a').on('click', function () {
          $('.navbar-collapse').collapse('hide');
        });
      }
      else {
        $('.navbar .navbar-inverse a').off('click');
      }
    }
    close_toggle();
    $(window).resize(close_toggle);

    /* WOW Scroll Spy
    ========================================================*/
    var wow = new WOW({
      //disabled for mobile
      mobile: false
    });

    wow.init();

    /* Testimonials Carousel
   ========================================================*/
    // var owl2 = $("#testimonials2");
    // owl2.owlCarousel({
    //   loop: true,
    //   nav: false,
    //   dots: true,
    //   center: true,
    //   margin: 15,
    //   slideSpeed: 1000,
    //   stopOnHover: true,
    //   autoPlay: true,
    //   responsiveClass: true,
    //   responsiveRefreshRate: true,
    //   responsive: {
    //     0: {
    //       items: 1
    //     },
    //     768: {
    //       items: 2
    //     },
    //     960: {
    //       items: 3
    //     },
    //     1200: {
    //       items: 3
    //     },
    //     1920: {
    //       items: 3
    //     }
    //   }
    // });





        /* Testimonials Carousel
   ========================================================*/
    var owl2 = $("#testimonialsTwo");
    owl2.owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      center: false,
      margin: 15,
      slideSpeed: 1000,
      stopOnHover: true,
      // autoplay:true,
      // autoplayTimeout:4000,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        960: {
          items: 2
        },
        1200: {
          items: 2
        },
        1920: {
          items: 2
        }
      }
    });




    var owl2 = $("#testimonialsThree");
    owl2.owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      center: false,
      margin: 20,
      slideSpeed: 1000,
      stopOnHover: true,
      autoplay:true,
     autoplayTimeout:7000,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        960: {
          items: 4
        },
        1200: {
          items: 4
        },
        1920: {
          items: 4
        }
      }
    });




    var owl = $("#testimonials");
    owl.owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      center: true,
      margin: 15,
      slideSpeed: 5000,
      stopOnHover: true,
      // autoplay:true,
      responsiveClass: true,
      responsiveRefreshRate: true,
      navigation: true,
      navText: ["<span class='test-slider-prev'><i class='fa fa-long-arrow-left'></i></span>", "<span class='test-slider-next'><i class='fa fa-long-arrow-right'></i></span>"],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        960: {
          items: 1
        },
        1200: {
          items: 1
        },
        1920: {
          items: 1
        }
      }
    });


    var $owl = $('.owl-carousel2');

    $owl.children().each(function (index) {
      $(this).attr('data-position', index); // NB: .attr() instead of .data()
    });

    $owl.owlCarousel({
      center: true,
      loop: true,
      nav: false,
      dots: true,
      margin: 0,
      slideSpeed: 5000,
      stopOnHover: true,
      autoPlay: true,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 2
        },
        768: {
          items: 2
        },
        960: {
          items: 3
        },
        1200: {
          items: 3
        },
        1920: {
          items: 3
        }
      }
    });

    $(document).on('click', '.owl-item>div', function () {
      var $speed = 300;  // in ms
      $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });

    /* Back Top Link active
    ========================================================*/
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });

  });

}(jQuery));
