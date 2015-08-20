// remap jQuery to $
(function($){
	
	var winW = $(window).width(),
		winH = $(window).height(),
		scrollVar = $(window).scrollTop();

	var $aslf = $('.aslf'),
		$asrt = $('.asrt'),
		$body = $('body'),
		$aside = $('aside'),
		$block = $('.pro .block'),
		$prevLi = $('.prev li'),
		$close = $('.close'),
		$scrollbar = $('.slimScrollDiv, .slimScrollRail');


	var transition = 'transition.perspectiveLeftOut',
		transitionsIn = ['transition.bounceDownIn', 'transition.perspectiveLeftIn', 'transition.bounceLeftIn', 'transition.perspectiveDownIn', 'transition.swoopIn' ],
		transitionsOut = ['transition.bounceUpOut', 'transition.perspectiveRightOut', 'transition.bounceRightOut', 'transition.perspectiveUpOut', 'transition.swoopOut'];
	
	var randomTransition = function(type) {
		transition = type[Math.floor(Math.random()*type.length)];
	}

	var portScroller = function() {
		$block.each(function() {
			var blockPos = $(this).offset().left; 
			if ( blockPos < (winW - winW/5)) {
				$(this).removeClass('off');
			} else {
				$(this).addClass('off');
			}
		});
	}
	
	var skewImages = function() {
		$('.prev li').each(function() {
			var offset = $(document).scrollTop() - $(this).offset().top;
			console.log(offset);
			$(this).css({
				//transform: 'skewY(' + offset / 100 + 'deg)',
				'-webkit-filter': 'blur(' + Math.round((offset) / 50) + 'px)'
			});
		});
	}
	
	/* trigger when page is ready */
	$(document).ready(function (){
		
		$aslf.velocity(transition);
		$asrt.velocity(transition);
		
		$('.slimScrollBar, .slimScrollRail').hide();
		$block.on("click", this, function(event) {
			event.preventDefault();
			randomTransition(transitionsIn);
			$aside.show();
			$body.css('overflow', 'hidden');
			$aslf.velocity(transition, {duration: 1000, delay: 300});
			$asrt.velocity(transition, {delay: 700});
			$('.slimScrollBar, .slimScrollRail').delay(1000).fadeIn();
		});
		
		$close.on("click", this, function(event) {
			event.preventDefault();
			$('.slimScrollBar, .slimScrollRail').hide();
			randomTransition(transitionsOut);
			$body.css('overflow', 'auto');
			$asrt.velocity(transition);
			$aslf.velocity(transition, {delay: 500});
			$aside.velocity({opacity: 1}, {duration: 10, display: "none", delay: 1000});
		});
		
		var scrollCount = 0;
		window.addEventListener( "scroll", function(event) {
			portScroller();
			scrollCount++;
		});
		$aslf.on( "scroll", function(event) {
			skewImages();
		});
		
		$aslf.slimscroll({
			width: '60%',
			height: '100%',
			color: '#e44f26',
			opacity: 1,
			alwaysVisible: true,
      		railVisible: true,
			railColor: '#999'
		});
		
	});
	
	
	
	$(window).load(function() {
	});
	
	$(window).resize(function() {
		
		winW = $(window).width();
		winH = $(window).height();
		
	});

})(window.jQuery);




