$(document).ready(function(){

	$('.b-1-slider').slick({
		fade: true,
		dots: true
	});

	$('.b-2-slider').slick({
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
					slidesToShow: 2
				}
			}
		]
	});

	$('.b-3-slider').slick({
		dots: true,
		autoplay: true,
		fade: true,
		arrows: false
	});

});