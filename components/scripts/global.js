// remap jQuery to $
(function($){
	
	var scroller = function() {
		var scrollVar = $(window).scrollTop();
		var winH = $(window).height();
		var winW = $(window).width();
		if (scrollVar > 0) {
			$('#sec1 .bgimg').css({
				'-webkit-filter': 'blur(' + Math.round((scrollVar - (winH/5)) / 50) + 'px)',
				'opacity': 1-((scrollVar-(winH/5))/1000)
			});
			$('#sec1 .logo').css({
				'opacity': 1-((scrollVar-(winH/5))/500),
				'top': (scrollVar *3) /2,
				'-webkit-filter': 'blur(' + Math.round((scrollVar - (winH/5)) / 50) + 'px)'
			});
			if (scrollVar < winH) {
				$('header .logo').css({
					marginTop: Math.round(( scrollVar - winH) / 5)
				});
				$('#hero .logo').css({
					transform: 'translateY(' + scrollVar/2 + 'px)',
					'-webkit-filter': 'blur(' + Math.round((scrollVar - (winH/5)) / 50) + 'px)'
				});
				$('.imgs').css({
					'-webkit-filter': 'blur(' + Math.round((scrollVar - (winH/5)) / 50) + 'px)',
				});
				$('.macbook').css({
					transform: 'translateX(-' + scrollVar/5 + 'px) translateY(-' + scrollVar/5 + 'px)'
				});
				$('.ipad').css({
					transform: 'translateX(-' + scrollVar/5 + 'px) translateY(' + scrollVar/5 + 'px)'
				});
				$('.camera').css({
					transform: 'translateX(' + scrollVar/5 + 'px) translateY(-' + scrollVar/5 + 'px)'
				});
				$('.imac').css({
					transform: 'translateY(-' + scrollVar/5 + 'px)'
				});
				$('.keyboard').css({
					transform: 'translateY(' + scrollVar/2 + 'px)'
				});
				$('.cups').css({
					transform: 'translateX(' + scrollVar/5 + 'px) translateY(-' + scrollVar/5 + 'px)'
				});
				$('.notebook').css({
					transform: 'translateX(' + scrollVar/5 + 'px) translateY(' + scrollVar/5 + 'px)'
				});
				$('.phone').css({
					transform: 'translateX(' + scrollVar/3 + 'px) translateY(' + scrollVar/3 + 'px)'
				});
			}
			var port = $('#port')
			var portY = port.offset().top;
			if (scrollVar > portY) {			
				port.children('.wrap').css({'position': 'fixed'}).children('.pro').css({
					//'left': 1-((scrollVar-winW)/2)*4
					'left': 1-(scrollVar-portY) + winW
				});
				if (scrollVar > (portY*3) + winH) {
					port.children('.wrap').css({
						'left': 40,
						'position': 'absolute'
					});
				}
			} else {
				port.children('.wrap').css({
					'left': 40,
					'position': 'absolute'
				});
			}
		} else {
			$('.imgs').css({
				'-webkit-filter': 'blur(0px)',
				'opacity': 1
			});
			$('#sec1 .logo').css({
				'opacity': 1,
				'top': 0,
				'-webkit-filter': 'blur(0px)'
			});
			$('header .logo').css({
				marginTop: -210
			});
		}
		if (scrollVar > winW) 
			$("header").addClass("fixed");
		else 
			$("header").removeClass("fixed");
		
		var $nav = $('nav li a');
		var winHMargin = winH - 40
		
		
		
		$('section').each(function(item) {
            var $this = $(this);
            var position = $this.position().top - scrollVar;
            if (position <= 0) {
				$nav.removeClass('active');
				var index = $this.index();
				$nav.eq(index).addClass('active');
            }
        }); 
		
		
		
		
	}
	
	/* trigger when page is ready */
	$(document).ready(function (){
		scroller();
		
		// Window Scroll Event (Compatible with IOS)
		var scrollCount = 0;
		window.addEventListener( "scroll", function( event ) {
			scroller();
			scrollCount++;
		});
		
	});
	
	
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		scroller();
	});

})(window.jQuery);




