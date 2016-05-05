$(document).ready(function() {
$('a[href^="#"]').click(function(){
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top,
    menu = document.getElementById('menu').offsetHeight;
		$('body,html').animate({scrollTop: top}, 1500);
});

$(".button").click(function(){
	$(".col-md-10 nav ul").slideToggle();
});
});