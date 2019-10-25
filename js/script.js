// JavaScript Document
$(document).ready(function () {
	checkSize();
    $(window).resize(checkSize);
	function checkSize(){
		if ($(window).width() <= 768){	
			$('.email-button').html('dnl&#8203;chang0&#8203;@gmail&#8203;.com')
		}else{
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
		$('#home-logo').css({fill: "#9E3A3A"});	
		var currentId = $(this).attr('id');
		$()
	});
	$('.menu-toggle').on('click', function() {
		$('body, html').toggleClass('noscroll');
	});
	$('.email-button').hover(function() {
		$('.contact-title').css({color:"#B8B4A8"});
		$('.link-button').css({opacity:.6});
		}, function() {
		$('.contact-title').css({color:"#9E9986"});
		$('.link-button').css({opacity: 1});
	});
	$('.link-button:nth-child(1)').hover(function(){
		$(".email-button, .link-button:nth-child(2), .link-button:nth-child(3)").css({opacity: .7});
		},function(){
		$(".email-button, .link-button:nth-child(2), .link-button:nth-child(3)").css({opacity: 1});	
	});
	$('.link-button:nth-child(2)').hover(function(){
		$(".email-button, .link-button:nth-child(1), .link-button:nth-child(3)").css({opacity: .7});
		},function(){
		$(".email-button, .link-button:nth-child(1), .link-button:nth-child(3)").css({opacity: 1});	
	});
	$('.link-button:nth-child(3)').hover(function(){
		$(".email-button, .link-button:nth-child(2), .link-button:nth-child(1)").css({opacity: .7});
		},function(){
		$(".email-button, .link-button:nth-child(2), .link-button:nth-child(1)").css({opacity: 1});	
	});
	//Masonry
	var $grid = $('.grid').imagesLoaded( function() {
	// init Masonry after all images have loaded
	$grid.masonry({
		// options...
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true,
		gutter: '.gutter-sizer'
		});
	});
	// Home Logo
	$(document).ready(function() {
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
	});
	var index = 0
	var color_list = ['#71DBD4', '#F9C2DC', '#89ABE3', '#B8CFCF','#6495ed', '#FAC9B8','#FAC9B8'];
	var names = [['b','pa'], ['v','wu'], ['c','ch'], ['g','ho'], ['h','ua'], ['\u25A1','\u25A1\u25A1'],['a', 'ie']]

	$(function() {
	  $('.logo-text').click(function() {
		$(this).css('background-color', color_list[index]);
		$(this).css('transition', 'background-color 1s');
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
        });
	});
});






