// Main application logic
window.$ = require('jQuery');

$('.l-nav-placeholder').click(function() {
 $('.l-primary-nav').toggleClass('nav-active');
 TweenMax.staggerFrom('.menu__item', 0.5,
   {
     y: 200,
     opacity: 0,
     delay: 0.2,
   },
     0.2
   );
});

$('.l-primary-nav__cross').click(function() {
 $('.l-primary-nav').removeClass('nav-active');
});

$('.intro__scroll').click(function() {
    $('html,body').animate({
     scrollTop: $("#introduction").offset().top
  });
});

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
      $('.l-primary-nav').toggleClass('nav-active');
      TweenMax.staggerFrom('.menu__item', 0.5,
        {
          y: 200,
          opacity: 0,
          delay: 0.25,
        },
          0.5
        );
    }
    else if (e.keyCode == 40) {
      $('html,body').animate({
       scrollTop: $("#introduction").offset().top
      });
    }
});

if($("body").hasClass("subpage")){
   $(".l-main-header").css("background-color", "#fff");
}


$(function() {

  var controller = new ScrollMagic.Controller();

  var tween1 = TweenMax.staggerFrom('.cases__placeholder', 2,
    {
      y: 200,
      opacity: 0,
      delay: 0.2,
    },
      0.2
    );

  var scene = new ScrollMagic.Scene({
    triggerElement: '#cases',
    duration: 900,
    offset: -300,
  })
  .setTween(tween1)
  .addTo(controller);

  var content_right = $(".taskone_right"),
      content_left = $(".taskone_left");

  var tl = new TimelineMax();

  tl.from(content_right, 0.5, {left:-300, opacity:0});
  tl.from(content_left, 0.5, {right:-100, opacity:0});



  var scene = new ScrollMagic.Scene({
    triggerElement: '.task',
    duration: 700,
    offset: -150,
  })
  .setTween(tl)
  .addTo(controller);

});
