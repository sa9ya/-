$(document).ready(function() {
	$('.popupo').click(function() {
		e.preventDefault();
    e.stopPropagation();
		$('.popup').css('display','block');
	});
	$('.blck, .close').click(function() {
		$('.popup').css('display','none');
	});
	var height = $(window).height(),
			width = $(window).width(),
			widthPW = $('.wind').width(),
			heightPW = $('.wind').height();
	$('.blck').css('height',height);
	$('.wind').css({'top':((height/2)-(heightPW/2)),
		'left':((width/2)-(widthPW/2))});
	$(window).resize(function() {
		var height = $(window).height(),
				width = $(window).width(),
				widthPW = $('.wind').width(),
				heightPW = $('.wind').height();
		$('.blck').css('height',height);
		$('.wind').css({'top':((height/2)-(heightPW/2)),
			'left':((width/2)-(widthPW/2))});
	});
	$(".bg").click(function () {
		$(".nav").slideToggle();
	});
	$('a[href^="#"]').click(function(){
		event.preventDefault();
		var id  = $(this).attr('href'), top= $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});