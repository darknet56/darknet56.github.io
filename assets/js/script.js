// JavaScript Document

jQuery(document).ready(function($) {
	
	$.backstretch([
      "assets/img/slider-1.jpg"
    , "assets/img/slider-2.jpg"
    , "assets/img/slider-3.jpg"
	, "assets/img/slider-4.jpg"
	, "assets/img/slider-5.jpg"
  ], {duration: 4000, fade: 3000});
  
  $( ".nav-item" ).hover(
  function() {
    $( this ).addClass( "nav-hover" );
  }, function() {
    $( this ).removeClass( "nav-hover" );
  }, {duration: 700}
);
$( "nav-item" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});
});
	