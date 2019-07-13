// JavaScript Document
window.scrollTo = function () {};

window.onload=function() {location.href='#';};

var $el = $(".logo-frame");
var elHeight = $el.outerHeight();
var elWidth = $el.outerWidth();

var $wrapper = $(".logo-wrap");
$(window).resize(function() {
  
  var scale, origin;
  var width = $(".logo-wrap").width();
  var height = $(".logo-wrap").height();
    
  scale = Math.min(
    width / elWidth -.25*(width / elWidth),    
    height / elHeight -.25*(height / elHeight)
  );
  
  $el.css({
    transform:"translate(-50%,-50%) " + "scale(" + scale + ")"
  });
  $(".art-label").css({
    transform:"translate(-50%,-50%) " + "scale(" + scale + ")"
  });
});

$(window).resize();




$(function() {
  $('.project1').hover(function() {
    $('.color-changing').css('background', '#E8FABB');
	$('.color-changing').css('transition', 'background .4s');
	$('.project2, .project3, .project4, .project5, .project6').css('opacity', '.25');
	$('.img-frame').css('border-color','rgba(255,255,255,.02)');
	$('.img-frame.project1').css('border-color','#707070');
	$('.project1 img').css('opacity', '0');
	$('.hover1').css('display', 'inline-block');
	$('.project1 img').css('transition', 'opacity .25s');
  }, 
	function() {
    // on mouseout, reset the background colour
    $('.color-changing').css('background-color', '#FFFFFF');
	$('.project2, .project3, .project4, .project5, .project6').css('opacity', '1');
	$('.img-frame').css('border-color','rgba(255,255,255,.08)');
	$('.project1 img').css('opacity', '1');
	$('.hover1').css('display', 'none');
  });
});
$(function() {
  $('.project2').hover(function() {
    $('.color-changing').css('background', '#9E3A3A');
	$('.color-changing').css('transition', 'background .4s');
	$('.project1, .project3, .project4, .project5, .project6').css('opacity', '.25');
	$('.img-frame').css('border-color','rgba(255,255,255,.02)');
	$('.img-frame.project2').css('border-color','white');
	$('.project2 img').css('opacity', '0');
	$('.hover2').css('display', 'inline-block');
	$('.project2 img').css('transition', 'opacity .25s');
  }, 
	function() {
    // on mouseout, reset the background colour
    $('.color-changing').css('background-color', '#FFFFFF');
	$('.project1, .project3, .project4, .project5, .project6').css('opacity', '1');
	$('.img-frame').css('border-color','rgba(255,255,255,.08)');
	$('.project2 img').css('opacity', '1');
	$('.hover2').css('display', 'none');
  });
});
$(function() {
  $('.project3').hover(function() {
    $('.color-changing').css('background', '#B8D5B8');
	$('.color-changing').css('transition', 'background .4s');
	$('.project1, .project2, .project4, .project5, .project6').css('opacity', '.25');
	$('.img-frame').css('border-color','rgba(255,255,255,.02)');
	$('.img-frame.project3').css('border-color','white');
	$('.project3 img').css('opacity', '0');
	$('.hover3').css('display', 'inline-block');
	$('.project3 img').css('transition', 'opacity .25s');
  }, 
	function() {
    // on mouseout, reset the background colour
    $('.color-changing').css('background-color', '#FFFFFF');
	$('.project1, .project2, .project4, .project5, .project6').css('opacity', '1');
	$('.img-frame').css('border-color','rgba(255,255,255,.08)');
	$('.project3 img').css('opacity', '1');
	$('.hover3').css('display', 'none');
  });
});
$(function() {
  $('.project4').hover(function() {
    $('.color-changing').css('background', '#73E6D3');
	$('.color-changing').css('transition', 'background .4s');
	$('.project1, .project2, .project3, .project5, .project6').css('opacity', '.25');
	$('.img-frame').css('border-color','rgba(255,255,255,.02)');
	$('.img-frame.project4').css('border-color','white');
	$('.project4 img').css('opacity', '0');
	$('.hover4').css('display', 'inline-block');
	$('.project4 img').css('transition', 'opacity .25s');
  }, 
	function() {
    // on mouseout, reset the background colour
    $('.color-changing').css('background-color', '#FFFFFF');
	$('.project1, .project2, .project3, .project5, .project6').css('opacity', '1');
	$('.img-frame').css('border-color','rgba(255,255,255,.08)');
	$('.project4 img').css('opacity', '1');
	$('.hover4').css('display', 'none');
  });
});
$(function() {
  $('.project5').hover(function() {
    $('.color-changing').css('background', '#EA9474');
	$('.color-changing').css('transition', 'background .4s');
	$('.project1, .project2, .project3, .project4, .project6').css('opacity', '.25');
	$('.img-frame').css('border-color','rgba(255,255,255,.02)');
	$('.img-frame.project5').css('border-color','white');
	$('.project5 img').css('opacity', '0');
	$('.hover5').css('display', 'inline-block');
	$('.project5 img').css('transition', 'opacity .25s');
  }, 
	function() {
    // on mouseout, reset the background colour
    $('.color-changing').css('background-color', '#FFFFFF');
	$('.project1, .project2, .project3, .project4, .project6').css('opacity', '1');
	$('.img-frame').css('border-color','rgba(255,255,255,.08)');
	$('.project5 img').css('opacity', '1');
	$('.hover5').css('display', 'none');
  });
});
$(function() {
  $('.project6').hover(function() {
	$('.color-changing').css('transition', 'background .4s');
	$('.project1, .project2, .project3, .project4, .project5').css('opacity', '.25');
	$('.img-frame').css('border-color','rgba(255,255,255,.02)');
	$('.img-frame.project6').css('border-color','#707070');
	$('.project6 img').css('opacity', '0');
	$('.hover6').css('display', 'inline-block');
	$('.project6 img').css('transition', 'opacity .25s');
  }, 
	function() {
    // on mouseout, reset the background colour
	$('.project1, .project2, .project3, .project4, .project5').css('opacity', '1');
	$('.img-frame').css('border-color','rgba(255,255,255,.08)');
	$('.project6 img').css('opacity', '1');
	$('.hover6').css('display', 'none');
	$('.hover6').css('transition', 'opacity .25s');
  });
});

$(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) {
			$('.backtotop').addClass('hvr-bob');
            $('.backtotop').fadeIn(200); 
        } else { 
            $('.backtotop').fadeOut(200); 
        } 
}); 
function backtotop() {
	$("html, body").animate({ scrollTop: 0 }, 600); 
}
function scrolldown() {
	$("html, body").animate({ scrollTop: $('.color-changing').offset().top  }, 600); 
}


// Home Logo
$(document).ready(function() {
	Scrambler({
		target: '.main-logo .scramble1',
		random: [100, 400],
		speed: 100,
		text: 'a'		
	});
	Scrambler({
		target: '.main-logo .scramble2',
		random: [100, 400],
		speed: 100,
		text: 'ie'		
	});
});


var index = 0
var color_list = ['#71DBD4', '#F9C2DC', '#89ABE3', '#B8CFCF','#6495ed', '#FAC9B8','#FAC9B8'];
var names = [['b','pa'], ['v','wu'], ['c','ch'], ['g','ho'], ['h','ua'], ['\u25A1','\u25A1\u25A1'],['a', 'ie']]

$(function() {
  $('.logo-text').click(function() {
    $(this).css('background-color', color_list[index]);
	$(this).css('transition', 'background-color .8s');
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
	index = (index +1)%color_list.length;
	if ((index +1) == color_list.length){
		Scrambler({
			target: '.logo-wrap p',
			random: [100, 450],
			speed: 100,
			text: "I paired my friends' favorite colors with a 3 letter abbreviation of their name that replaces the vowels. Inspired by my email - dnlchang0@gmail.com"
		});
	}else if(index==0){
		Scrambler({
			target: '.logo-wrap p',
			random: [100, 450],
			speed: 100,
			text: "Hi, my name's Daniel. I'm a product designer trained in architecture.I do a little of just about everything and a lot of human-centered design."
		});
	}	
  });
});






