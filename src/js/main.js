// Main application logic
window.$ = require('jQuery');

if($("body").hasClass("subpage")){
   $(".l-main-header").css("background-color", "#fff");
} else {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 800) {
        $(".l-main-header").css("background-color", "white");
    } else {
        $(".l-main-header").css("background-color", "transparent");
    }
  });
}

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
          delay: 0.2,
        },
          0.2
        );
    }
    else if (e.keyCode == 40) {
      $('html,body').animate({
       scrollTop: $("#introduction").offset().top
      });
    }
});

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

  var tween2 = TweenMax.staggerFrom(['img.left', 'img.right'], 2,
    {
      y: 600,
    },
      0.2
    );

  var scene = new ScrollMagic.Scene({
    triggerElement: '.company__text',
    duration: 900,
    offset: -300,
  })
  .setTween(tween2)
  .addTo(controller);


  var tween3 = TweenMax.staggerFrom('.specific__info', 2,
    {
      x: -600,
    },
      0.4
    );
  var scene = new ScrollMagic.Scene({
    triggerElement: '.specific',
    duration: 900,
    offset: -300,
  })
  .setTween(tween3)
  .addTo(controller);

  var tween4 = TweenMax.staggerFrom('.specific__info2', 2,
    {
      x: 600,
    },
      0.4
    );
  var scene = new ScrollMagic.Scene({
    triggerElement: '.specific',
    duration: 900,
    offset: -300,
  })
  .setTween(tween4)
  .addTo(controller);

  var tween5 = TweenMax.staggerFrom('.company__vision', 2,
    {
      y: 200,
    },
      0.4
    );
  var scene = new ScrollMagic.Scene({
    triggerElement: '.company',
    duration: 900,
    offset: -300,
  })
  .setTween(tween5)
  .addTo(controller);

  var tween6 = TweenMax.from('.introduction', 5,
  {
    x: -1200,
    opacity: 0,
  },
    2
  );

  var scene = new ScrollMagic.Scene ({
    triggerElement: '.arrow__down',
    duration: 500,
  })
  .setTween(tween6)
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

var $title = $(".intro__title");
$title.html( $title.html().replace(/./g, "<span>$&</span>").replace(/\s/g, " "));

var $subtitle = $(".intro__title--sub");
$subtitle.html( $subtitle.html().replace(/./g, "<span>$&</span>").replace(/\s/g, ""));

TweenMax.staggerFromTo( $title.find("span"), 0.2, {autoAlpha:0}, {autoAlpha:1}, 0.1 );
TweenMax.staggerFromTo( $subtitle.find("span"), 0.2, {autoAlpha:0}, {autoAlpha:1}, 0.18 );
