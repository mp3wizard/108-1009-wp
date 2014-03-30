jQuery(document).ready(function($){
	$("article.grid").gridalicious({
		gutter: 8,
		selector: 'figure',
		width: 155,
		animate: true
	});
	// Slide Menu Left & Right


	$('main').on('click', function(){
		if($('main').hasClass('slideRightOut')) {
			$('main').removeClass('slideRightOut').addClass('slideIn');
			$('aside#search').removeClass('show');
			$('#search input[type=search]').blur();
			$('body').removeClass('sliderOpen');
			return false;
		} if ($('main').hasClass('slideLeftOut')) {
			$('main').removeClass('slideLeftOut').addClass('slideIn');
			$('aside#nav').removeClass('show');
			$('#search input[type=search]').blur();
			$('body').removeClass('sliderOpen');
			return false;
		}
		return true;
	});
	// End of Slide menu Left Right

	// Start Slide menu Top
	$('.open-overlay').on('click', function(){
		$('body').addClass('show-overlay');
		$('.close-overlay, #overlay').on('click', function(){
			$('body').removeClass('show-overlay');
		})
	})


	var navList = $('#nav-list');

	$('.header-list').on('click', function() {
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			navList.removeClass('slideTopIn');
		} else {
			$(this).addClass('active');
			navList.addClass('slideTopIn');
		}
		return false;
	})


	// Disable click before login
	$('.disable a').on('click touch', function() {
		return false;
	})

	// Clear Search
	$('.icon-clear').on('click touch',function(){
	   $(this).parent().find('input').val('');
	});

	// Append meta viewport in iframe

	$('#webviewFrame').contents().find("head").append('<meta name="viewport" content="width=1024">');

});