// JavaScript Document
$(document).ready(function() {
/* general */	
	$(".nav-item").hover(
		function(){
			$(this).addClass( "nav-hover");
		}, function() {
			$(this).removeClass("nav-hover");
		}
	);
	
	$("#cena").hover(
		function(){
			$(this).html("<embed src='assets/music/cena.mp3' autostart='true' loop='true' width='2' height='0'>and HIS NAME IS JOHN CENA			</embed>");
		}, function() {
			$(this).html("and HIS NAME IS JOHN CENA");
		}
	);
	$("#cena").hover(
		function(){
			$("#cena-pic").css('opacity', '.5')
		}, function() {
			$("#cena-pic").css('opacity', '0')
		}
	);

/* home */	
	$(function(){
      $("#slides").slidesjs({
        width: 940,
        height: 640
      });
    });
	
/* portfolio */	
	$(".cover").hover(
		function(){
			$(this).addClass("cover-hover");
		}, function(){
			$(this).removeClass("cover-hover");
		}
	);
	$("#merritt .cover").hover(
		function(){
			$("#merritt-text").addClass("text-hover");
		}, function(){
			$("#merritt-text").removeClass("text-hover");
		}
	);
	$("#berkeley .cover").hover(
		function(){
			$("#berkeley-text").addClass("text-hover");
		}, function(){
			$("#berkeley-text").removeClass("text-hover");
		}
	);
	$("#misc .cover").hover(
		function(){
			$("#misc-text").addClass("text-hover");
		}, function(){
			$("#misc-text").removeClass("text-hover");
		}
	);
	$("#sandstorm .cover").hover(
		function(){
			$("#sandstorm-text").addClass("text-hover");
		}, function(){
			$("#sandstorm-text").removeClass("text-hover");
		}
	);


	$("#sandstorm").click(
		function(){
			var muson = $("#music").html();
			if (muson =="") {
				$("#music").html("<embed src='assets/music/Darude-Sandstorm.mp3' autostart='true' loop='true' width='2' height='0'></embed>")
			} else {
				$("#music").html("")
			}
		});
});
	

	
	
	







