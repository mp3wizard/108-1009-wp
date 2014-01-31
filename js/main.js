jQuery(document).ready(function($){ 
	$("article.grid").gridalicious({
		gutter: 8,
		selector: 'figure',
		width: 155,
		animate: true
	});
	// Slide Menu
	$('#btnMenu').on('click', function(){
		if($('main').hasClass('slideLeftOut')) { 
			$('main').removeClass('slideLeftOut').addClass('slideIn');
			$('aside#nav').removeClass('show');
			$('#search input[type=search]').blur();
		} else { 
			$('main').removeClass('slideIn').addClass('slideLeftOut');
			$('aside#nav').addClass('show');
		}
		return false;
	});
	$('#btnSearch').on('click', function(){
		if($('main').hasClass('slideRightOut')) { 
			$('main').removeClass('slideRightOut').addClass('slideIn');
			$('aside#search').removeClass('show');
			$('#search input[type=search]').blur();
		} else { 
			$('main').removeClass('slideIn').addClass('slideRightOut');
			$('aside#search').addClass('show');
			$('#search input[type=search]').focus();
		}
		return false;
	});

	$('main').on('click', function(){
		if($('main').hasClass('slideRightOut')) { 
			$('main').removeClass('slideRightOut').addClass('slideIn');
			$('aside#search').removeClass('show');
			$('#search input[type=search]').blur();
			return false;
		} if ($('main').hasClass('slideLeftOut')) { 
			$('main').removeClass('slideLeftOut').addClass('slideIn');
			$('aside#nav').removeClass('show');
			$('#search input[type=search]').blur();
			return false;
		}
		return true;
	});

	$('.popup').magnificPopup({
		type:'image',
		alignTop: false,
		closeBtnInside: false,
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + '<p><span>'+item.el.attr('data-view')+'</span> <span>'+item.el.attr('data-share')+' Stories</span><p>';
			}
		},
		removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function() {
      // just a hack that adds mfp-anim class to markup 
       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  }
	});

	// Disable click before login
	$('.disable a').on('click touch', function() { 
		return false;
	})

	// Clear Search
	$('.icon-clear').on('click touch',function(){
	   $(this).parent().find('input').val('');
	});

});