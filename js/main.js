$(document).ready(function () {

  // styling selects
  $(function() {
    $('input, select').styler();
  });

  // main slider

  $('.main-slider').slick({
    fade: true,
    nextArrow: '<i class="fa fa-angle-right"></i>',
    prevArrow: '<i class="fa fa-angle-left"></i>',
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 10000,
  });

  // hot-deal slider

  $('.hot-deal-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 6000,
  });

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 168) {
          $(".header").addClass("sticky-header");
      } else {
          $(".header").removeClass("sticky-header");
      }
  });
});


