jQuery(document).ready(function($){ 
	$("article.grid").gridalicious({
		gutter: 8,
		selector: 'figure',
		width: 245,
		animate: true
	});
	$('#btnMenu').on('click tap', function(){
		if($('main').hasClass('slideLeftOut')) { 
			$('main').removeClass('slideLeftOut').addClass('slideIn');
		} else { 
			$('main').removeClass('slideIn').addClass('slideLeftOut');
		}
		return false;
	});
	$('#btnSearch').on('click tap', function(){
		if($('main').hasClass('slideRightOut')) { 
			$('main').removeClass('slideRightOut').addClass('slideIn');
		} else { 
			$('main').removeClass('slideIn').addClass('slideRightOut');
		}
		return false;
	});

	$('main').on('swipeleft', function(){
		$('main').addClass('slideLeftIn');
	});
});