$(document).ready(function(){

	$('.news-share-block input').val(location.href);
	
	$('.news-share-block').click(function(){
		var span = $(this).find('span');
		$(this).find('input').select();
		document.execCommand('copy');
		$(this).find('span').text('Готово');
		setTimeout(function(){
			span.text('Скопировать');
		},3000);
	});

	function fixScroll(){
		if ( $(window).width() > 767 ) {
			var vg = $('.b-2-wrap').offset().top - 80;
			var ng = vg + $('.b-2-wrap').outerHeight() - $('.b-2 .info').outerHeight();
			var st = $(window).scrollTop();

			if ( st > vg ) {
				if ( st > ng ) {
					$('.b-2 .info').removeClass('scroll');
					$('.b-2 .info').addClass('bottom');
				} else {
					$('.b-2 .info').addClass('scroll');
					$('.b-2 .info').removeClass('bottom');
				}
			} else {
				$('.b-2 .info').removeClass('scroll');
				$('.b-2 .info').removeClass('bottom');
			}
		} else {
			$('.b-2 .info').removeClass('scroll');
			$('.b-2 .info').removeClass('bottom');
		}
	}
	fixScroll();

	$(window).scroll(function(){
		fixScroll();
	});

});