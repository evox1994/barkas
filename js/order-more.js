$(document).ready(function(){

	$('.b-3-slider').slick({
		arrows: false,
		autoplay: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	function Progress(){
		var col = $('.steps .step').length;
		var w = $('.progress-el').outerWidth();
		var n = $('.steps .step.active').data('num');
		if ( n > 1 ){
			var pos = (97*(n - 1))/(col - 1);
			$('.progress-el').css('left','calc('+pos+'% - '+w+'px)');
		} else {
			$('.progress-el').css('left','3%');
		}
	}

	$('.step .btn-a').click(function(){
		var el = $(this).attr('href');
		$('.steps .step').removeClass('active');
		$(el).addClass('active');
		Progress();
		$('html,body').animate({scrollTop: ($(el).offset().top - 60)},500);
		return false;
	});

	$('.step .back-btn').click(function(){
		var el = $(this).attr('href');
		$('.steps .step').removeClass('active');
		$(el).addClass('active');
		Progress();
		$('html,body').animate({scrollTop: ($(el).offset().top - 60)},500);
		return false;
	});

	$('body').on('click','.b-1-btn', function(){
		var el = $(this).attr('href');
		var des = $(el).offset().top - 80;
		$('body,html').animate({scrollTop: des}, 800);
		return false;
	});

});