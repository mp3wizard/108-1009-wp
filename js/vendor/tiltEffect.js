/*
 * tiltEffect: Metro Tiles Tilt Effect
 * URL: http://github.com/SalGnt/tiltEffect
 * LICENSE: The MIT License (MIT)
 */

(function($) {
	$.fn.tiltEffect = function() {
		this.mousemove(function(e) {
			// Cursor position inside the element.
			var x = e.pageX - this.offsetLeft;
			var y = e.pageY - this.offsetTop;

			var quarterWidth = $(this).outerWidth() / 4;
			var quarterHeight = $(this).outerHeight() / 4;

			if (y < quarterHeight && x > quarterWidth && x < quarterWidth*3) {
				setEffect(this, "top");
			} else if (x > quarterWidth*3 && y > quarterHeight && y < quarterHeight*3) {
				setEffect(this, "right");
			} else if (y > quarterHeight*3 && x > quarterWidth && x < quarterWidth*3) {
				setEffect(this, "bottom");
			} else if (x < quarterWidth*3 && y > quarterHeight && y < quarterHeight*3) {
				setEffect(this, "left");
			} else {
				setEffect(this, "center");
			}
			console.log(quarterWidth +" , "+ quarterHeight);
		});

 		function setEffect(targetElement, effectDirection) {
 			var directions = new Array("center", "top", "right", "bottom", "left");

			// Disable all the effect except the right one.
			for (i in directions) {
				if (!(directions[i] == effectDirection)) {
					$(targetElement).removeClass(directions[i]);
				}
			}

			$(targetElement).addClass(effectDirection);
		}
	}
}(jQuery));
