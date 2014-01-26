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
			$('aside#nav').removeClass('show');
		} else { 
			$('main').removeClass('slideIn').addClass('slideLeftOut');
			$('aside#nav').addClass('show');
		}
		return false;
	});
	$('#btnSearch').on('click tap', function(){
		if($('main').hasClass('slideRightOut')) { 
			$('main').removeClass('slideRightOut').addClass('slideIn');
			$('aside#search').removeClass('show');
		} else { 
			$('main').removeClass('slideIn').addClass('slideRightOut');
			$('aside#search').addClass('show');
		}
		return false;
	});

	$('main').on('swipeleft', function(){
		$('main').addClass('slideLeftIn');
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
	$('.disable a').bind('click touch', function() { 
		return false;
	})
});