$(document).ready(function() {



	$(".bg").click(function () { // Выпадающее меню
		$(".nav").slideToggle();
	});

	$('a[href^="#"]').click(function(e){ // Плавный скрол
		e.preventDefault();
		e.stopPropagation();
		var id  = $(this).attr('href'), top= $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$('.popupo').click(function(e) { // Показывает окно
		e.preventDefault();
    e.stopPropagation();
		$('.popup').css('display','block');
		$('body').addClass('ovr');
		var widthPW,
				h = $(window).height(),
				hw = $('.wind').height(),
				width = $(window).width(),
				hwa = 580;
	if (width<600) {
		widthPW=width;
	} else {
		widthPW=600;
	}
	$('.blck').css({height:h});
	$('.wind').css({width:widthPW,
									left: ((width/2)-(widthPW/2))});
	if (h<hwa+50) {
		$('.wind').css({height:h,
										top:'0'});
		$('.wind').addClass('ovrs');
	} else {
		$('.wind').css({height:hwa,
										top:'50px'});
				$('.wind').removeClass('ovrs');
	}

	$(window).resize(function() { // Изменение размера окна
		var widthPW,
				h = $(window).height(),
				hw = $('.wind').height(),
				width = $(window).width(),
				hwa = 580;
	if (width<600) {
		widthPW=width;
	} else {
		widthPW=600;
	}
	$('.blck').css({height:h});
	$('.wind').css({width:widthPW,
									left: ((width/2)-(widthPW/2))});
	if (h<hwa+50) {
		$('.wind').css({height:h,
										top:'0'});
		$('.wind').addClass('ovrs');
	} else {
		$('.wind').css({height:hwa,
										top:'50px'});
				$('.wind').removeClass('ovrs');
	}
	});});

	$('.blck, .close').click(function() { // Скрывает окно
		$('.popup').css('display','none');
		$('.wind').removeClass('ovrs');
		$('body').removeClass('ovr');
	});

});