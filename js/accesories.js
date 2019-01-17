$(document).ready(function(){

	$('.filter-drop li span').click(function(){
		if ( $(this).parents('.filter-drop li').hasClass('active') ){
			$(this).parents('.filter-drop li').removeClass('active');
		} else {
			$(this).parents('.filter-drop li').addClass('active');
		}
	});

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

	/*$('.search-wrap input').on('input',function(){
		var str = $(this).val();

		$('.catalog-list-2 .image p').mark(str);
		$('.catalog-list-2 .text').mark(str);
		/*if ( str ){
			$('.catalog-list-2 .image p').each(function(){
				var text = $(this).find('mark').text();
				var str1 = $(this).html();
				var strz = '<mark>'+str+'</mark>';
				str1 = str1.replace(RegExp('<mark>','g'),'');
				str1 = str1.replace(RegExp('</mark>','g'),'');
				str1 = str1.replace(RegExp(str,'g'),strz);
				console.log(str1);
				$(this).html(str1);
			});
			$('.catalog-list-2 .text').each(function(){
				var text = $(this).find('mark').text();
				var str1 = $(this).html();
				var strz = '<mark>'+str+'</mark>';
				str1 = str1.replace(RegExp('<mark>','g'),'');
				str1 = str1.replace(RegExp('</mark>','g'),'');
				str1 = str1.replace(RegExp(str,'g'),strz);
				$(this).html(str1);
			});
		} else {
			$('.catalog-list-2 .image p').each(function(){
				var str1 = $(this).html();
				str1 = str1.replace(RegExp('<mark>','g'),'');
				str1 = str1.replace(RegExp('</mark>','g'),'');
				$(this).html(str1);
			});
			$('.catalog-list-2 .text').each(function(){
				var str1 = $(this).html();
				str1 = str1.replace(RegExp('<mark>','g'),'');
				str1 = str1.replace(RegExp('</mark>','g'),'');
				$(this).html(str1);
			});
		}*/
	//});*/

	var mark = function(){
		var keyword = $('.search-wrap input').val();
		/*var options = {
			'separateWordSearch': false,
		}*/

		$('.context').unmark({
			done: function(){
				$('.context').mark(keyword);
			}
		});
	}

	$('.search-wrap input').on('input',mark);

});