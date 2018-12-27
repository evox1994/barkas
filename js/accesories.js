$(document).ready(function(){

	$('.filter-drop li span').click(function(){
		if ( $(this).parents('.filter-drop li').hasClass('active') ){
			$(this).parents('.filter-drop li').removeClass('active');
		} else {
			$(this).parents('.filter-drop li').addClass('active');
		}
	});

});