$(window).on('scroll', function() {
	if($(window).scrollTop() > 50) {
		$('nav').addClass('FadeIn');
		$('nav').removeClass('FadeOut');
	}else if($(window).scrollTop() == 0) {
		$('nav').removeClass('FadeIn');
		$('nav').addClass('FadeOut');
	}
});