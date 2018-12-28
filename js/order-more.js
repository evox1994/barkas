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
		var pos = (97*n)/col;
		$('.progress-el').css('left','calc('+pos+'% - '+w+'px)');
	}

	$('.step .btn-a').click(function(){
		var el = $(this).attr('href');
		$('.steps .step').removeClass('active');
		$(el).addClass('active');
		Progress();
		return false;
	});

	$('body').on('click','.b-1-btn', function(){
		var el = $(this).attr('href');
		var des = $(el).offset().top - 80;
		$('body,html').animate({scrollTop: des}, 800);
		return false;
	});

});