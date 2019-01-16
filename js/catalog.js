$(document).ready(function(){

	$('.filters-btn').click(function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.b-2-filters').removeClass('active');
			$('body').removeClass('active');
			$(this).text('Фильтры');
		} else {
			$(this).addClass('active');
			$('.b-2-filters').addClass('active');
			$('body').addClass('active');
			$(this).text('Скрыть');
		}
	});

});