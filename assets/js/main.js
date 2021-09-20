/*-----------------------------------------------------------------------------------
  Template Name: Tagbin HTML Template.
  Template URI: #
  Description: Tagbin Empowering Govt & Industries With Digital Experience  
  Author: Tagbin
  Version: 1.0
-----------------------------------------------------------------------------------*/
/*-------------------------------
[  Table of contents  ]
---------------------------------
  01. jQuery MeanMenu
  02. wow js active
  03. Sticky Header
  04. ScrollUp
  05. Start  Site Info
  06. Search Bar
  07. Magnific Popup
  08. CounterUp

/*--------------------------------
[ End table content ]
-----------------------------------*/
(function ($) {
    'use strict';

    /*-------------------------------------------
      01. jQuery MeanMenu
    --------------------------------------------- */
    $('.mobile-menu nav').meanmenu({
        meanMenuContainer: '.mobile-menu-area',
        meanScreenWidth: "767",
        meanRevealPosition: "right",
    });


    /*-------------------------------------------
      02. wow js active
    --------------------------------------------- */
    new WOW().init();


    /*-------------------------------------------
      03. Sticky Header
    --------------------------------------------- */
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $("#sticky-header-with-topbar").removeClass("scroll-header");
        } else {
            $("#sticky-header-with-topbar").addClass("scroll-header");
        }
    });

    /*--------------------------
      04. ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


    /*------------------------------------    
      05. Start  Site Info
    --------------------------------------*/
    $('.toggle-menu').on('click', function () {
        if ($(this).siblings('.site-info-wrap').hasClass('active')) {
            $(this).siblings('.site-info-wrap').removeClass('active').slideUp();
            $(this).removeClass('active');
            if ($(this).find("i").hasClass('zmdi-menu')) {
                $(this).find("i").removeClass('zmdi-menu').addClass('zmdi-close');
            } else {
                $(this).find("i").removeClass('zmdi-close').addClass('zmdi-menu');
            }
        } else {
            $('.toggle-menu .site-info-wrap').removeClass('active').slideUp();
            $('.toggle-menu .site-info-wrap').removeClass('active');
            $(this).addClass('active');
            $(this).siblings('.site-info-wrap').addClass('active').slideDown();
            if ($(this).find("i").hasClass('zmdi-menu')) {
                $(this).find("i").removeClass('zmdi-menu').addClass('zmdi-close');
            }
        }
    });
    $('.icon-clear').on('click', function () {
        $('.site-info-wrap').removeClass('active').slideUp();
        $('.toggle-menu').find("i").removeClass('zmdi-close').addClass('zmdi-menu');
    });


    // End  site info
    /*------------------------------------    
      06. Search Bar
    --------------------------------------*/
    $('.search__open').on('click', function () {
        $('body').toggleClass('search__box__show__hide');
        return false;
    });
    $('.search__close__btn .search__close__btn_icon').on('click', function () {
        $('body').toggleClass('search__box__show__hide');
        return false;
    });


    /*--------------------------------
      07. Magnific Popup
    ----------------------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });

    $('.image-popup').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        removalDelay: 100,
        gallery: {
            enabled: true,
        }
    });


    /*-----------------------------
      08. CounterUp
    -----------------------------*/
    $('.count').counterUp({
        delay: 60,
        time: 3000
    });

    /*-----------------------------
      09. Customer Logo
    -----------------------------*/
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3,
                arrows: false,
            }
        }]
    });

    /*-----------------------------
        10. Industry Wise Services
    -----------------------------*/
    $(".tabs li a").click(function () {
        $(".tabs li a").removeClass("active");
        $(this).addClass("active");
        $(".tab_content_container > .tab_content_active").removeClass("tab_content_active");
        $(this.rel).addClass("tab_content_active");
    });

    /*-----------------------------
      11. Testimonial Slider
    -----------------------------*/
    var feedbackSlider = $('.feedback-slider');
    feedbackSlider.owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        slideSpeed: 3000,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {

            // breakpoint from 767 up
            767: {
                nav: true,
                dots: false,
            }
        },
        animateIn: 'fake',
    });

    feedbackSlider.on("translate.owl.carousel", function () {
        // $(".feedback-slider-item h2").removeClass("animated slideIn").css("opacity", "0");
        $(".feedback-slider-item img").removeClass("animated fadeInUp").css("opacity", "0.4");
    });

    feedbackSlider.on("translated.owl.carousel", function () {
        $(".feedback-slider-item h2").addClass("animated slideIn").css("opacity", "1");
        $(".feedback-slider-item img").addClass("animated").css("opacity", "1");
    });
    feedbackSlider.on('changed.owl.carousel', function (property) {
        var current = property.item.index;
        var prevThumb = $(property.target).find(".owl-item").eq(current).prev().find("img").attr('src');
        var nextThumb = $(property.target).find(".owl-item").eq(current).next().find("img").attr('src');
        var prevRating = $(property.target).find(".owl-item").eq(current).prev().find('span').attr('data-rating');
        var nextRating = $(property.target).find(".owl-item").eq(current).next().find('span').attr('data-rating');
        $('.thumb-prev').find('img').attr('src', prevThumb);
        $('.thumb-next').find('img').attr('src', nextThumb);
        $('.thumb-prev').find('span').next().html(prevRating + '<i class="fa fa-star"></i>');
        $('.thumb-next').find('span').next().html(nextRating + '<i class="fa fa-star"></i>');
    });
    $('.thumb-next').on('click', function () {
        feedbackSlider.trigger('next.owl.carousel', [300]);
        return false;
    });
    $('.thumb-prev').on('click', function () {
        feedbackSlider.trigger('prev.owl.carousel', [300]);
        return false;
    });

    /*-----------------------------
      12. Industries Slider
    -----------------------------*/
    $('.industries_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    /*-----------------------------
     13. Case Study Isotop
   -----------------------------*/
    $(window).load(function () {
        $('.grid').isotope({
            itemSelector: '.grid-item',
            resizable: false,
            layoutMode: 'fitRows'
        });

        // filter items on button click
        $('.filter-button-group').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $('.grid').isotope({ filter: filterValue });
            $('.filter-button-group li').removeClass('active');
            $(this).addClass('active');
        });
    });





})(jQuery);
