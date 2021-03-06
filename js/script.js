// JavaScript Document
$(document).ready(function () {
  checkSize();
  $(window).resize(checkSize);

  function checkSize() {
    if ($(window).width() <= 768) {
      $('.email-button').html('dnl&#8203;chang0&#8203;@gmail&#8203;.com')
    } else {
      $('.email-button').html('dnlchang0@gmail.com')
    }
  }

  //Nav Bar
  $('.menu-toggle').on('click', function () {
    $('.sidebar').toggleClass('active');
    $('.overlay').toggleClass('active');
    $(this).toggleClass('is-active');
  });

  $('#pageSubmenu a').on('hover', function () {
    $('#home-logo').css({
      fill: "#9E3A3A"
    });
    var currentId = $(this).attr('id');
    $()
  });
  $('.menu-toggle').on('click', function () {
    $('body, html').toggleClass('noscroll');
  });

  //Contact 
  $('.email-button').hover(function () {
    $('.contact-title').css({
      color: "#B8B4A8"
    });
    $('.link-button').css({
      opacity: .6
    });
  }, function () {
    $('.contact-title').css({
      color: "#9E9986"
    });
    $('.link-button').css({
      opacity: 1
    });
  });
  $('.link-button:nth-child(1)').hover(function () {
    $(".email-button, .link-button:nth-child(2), .link-button:nth-child(3)").css({
      opacity: .7
    });
  }, function () {
    $(".email-button, .link-button:nth-child(2), .link-button:nth-child(3)").css({
      opacity: 1
    });
  });
  $('.link-button:nth-child(2)').hover(function () {
    $(".email-button, .link-button:nth-child(1), .link-button:nth-child(3)").css({
      opacity: .7
    });
  }, function () {
    $(".email-button, .link-button:nth-child(1), .link-button:nth-child(3)").css({
      opacity: 1
    });
  });
  $('.link-button:nth-child(3)').hover(function () {
    $(".email-button, .link-button:nth-child(2), .link-button:nth-child(1)").css({
      opacity: .7
    });
  }, function () {
    $(".email-button, .link-button:nth-child(2), .link-button:nth-child(1)").css({
      opacity: 1
    });
  });

  //Isotope
    var $grid=$('.grid').isotope({
      // options...
      itemSelector: '.grid-item',
      percentPosition: true,
      layoutMode: 'masonry',
      masonry: {
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer'
      }
    });
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});
  // bind filter button click
  $('.filters-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });
  // change is-checked class on buttons
  $('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });

  // Home Logo
    Scrambler({
      target: '.main-logo .scramble1',
      random: [100, 600],
      speed: 100,
      text: 'a'
    });
    Scrambler({
      target: '.main-logo .scramble2',
      random: [100, 600],
      speed: 100,
      text: 'ie'
    });
	
var theta = 0;
  $('.main-logo').click(function(){
	theta = theta+180;
	$('.logo-background img').css('transform', 'rotate(' + theta + 'deg)');
	scramble();
  });
  (function () {
    var supportOffset = window.pageYOffset !== undefined,
      lastKnownPos = 0,
      ticking = false,
      scrollDir,
      currYPos;

    function doSomething(scrollPos, scrollDir) {
      if (scrollDir == 'up') {
		theta = theta + 15;
    	$('.logo-background img').css('transform', 'rotate(' + theta + 'deg)');
		scramble();
		}else{
		theta = theta - 15;
    	$('.logo-background img').css('transform', 'rotate(' + theta + 'deg)');
		scramble();
	  };
      console.log('scroll pos: ' + scrollPos + ' | scroll dir: ' + scrollDir);
    }

    window.addEventListener('wheel', function (e) {
      currYPos = supportOffset ? window.pageYOffset : document.body.scrollTop;
      scrollDir = lastKnownPos > currYPos ? 'up' : 'down';
      lastKnownPos = currYPos;

      if (!ticking) {
        window.requestAnimationFrame(function () {
          doSomething(lastKnownPos, scrollDir);
          ticking = false;
        });
      }
      ticking = true;
    });
  })();
 
  /*var theta = 0;
  

  $(window).bind('mousewheel DOMMouseScroll', function () {
    theta = theta + 15;
    $('.logo-background img').css('transform', 'rotate(' + theta + 'deg)');
    return 'hi';
  });
*/
  var index = 0
  var color_list = ['#71DBD4', '#F9C2DC', '#89ABE3', '#B8CFCF', '#6495ed', '#FAC9B8', '#FAC9B8'];
  var names = [
    ['b', 'pa'],
    ['v', 'wu'],
    ['c', 'ch'],
    ['g', 'ho'],
    ['h', 'ua'],
    ['\u25A1', '\u25A1\u25A1'],
    ['a', 'ie']
  ]

  function scramble() {
      $('.logo-text').css('background-color', color_list[index]);
      $('.logo-text').css('transition', 'background-color 1s');
      Scrambler({
        target: '.main-logo .scramble1',
        random: [100, 400],
        speed: 100,
        text: names[index][0]
      });
      Scrambler({
        target: '.main-logo .scramble2',
        random: [100, 400],
        speed: 100,
        text: names[index][1]
      });
      index = (index + 1) % color_list.length;
    }
});
// parallax attempt
/*$.fn.moveIt = function(){
  var $window = $('.side-scroll');
  var instances = [];

  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });

  window.scroll = function(){
    var scrollLeft = $window.scrollLeft();
    instances.forEach(function(inst){
      inst.update(scrollLeft);
    });
  }
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollLeft){
  var pos = scrollLeft / this.speed;
  this.el.css('transform', 'translateX(' + -pos + 'px)');
};

$(function(){
  $('[data-scroll-speed]').moveIt();
});*/

//pls work
/*$(function() {
	$('.side-scroll').mousewheel(function(event,delta){
		$('#scroll1').css('transform', 'translate(' + ($('.side-scroll').scrollLeft()/1.5) + 'px)')
		$('#scroll2').css('transform', 'translate(' + ($('.side-scroll').scrollLeft()/4) + 'px,-50%)')
	});
});
//side scroll with mousewheel
$(function() {

   $('.side-scroll').mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 75);
    
      event.preventDefault();

   });

});*/