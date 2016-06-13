// Main application logic
window.$ = require('jQuery');

$('.l-nav-placeholder').click(function() {
 $('.l-primary-nav').toggleClass('nav-active');
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
       console.log('gedrukt');
      $('.l-primary-nav').toggleClass('nav-active');
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

  var tween1 = TweenMax.from('#cases__placeholder', 2, {
      x: -1200,
      opacity: 0
    });

  var scene = new ScrollMagic.Scene({
    triggerElement: '#cases',
    duration: 400 // pin the element for 400px of scrolling
  })
  .setTween(tween1)
  .addTo(controller);

});
