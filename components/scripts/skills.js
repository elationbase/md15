// remap jQuery to $
(function($){
	
	var nextItem = function(i) {
		setTimeout(function(){ 
			i.eq(0).removeClass('off');
			nextItem(i.slice(1));
		}, 300);
	}

	var shuffle = function(a) {
		var j, // Random position
			x, // Last item
			i = a.length; // Iterator
		// Loop through the array
		while(i) {
			// Select a random position
			j = (Math.random() * i) | 0;
			// Get the last item in the array
			x = a[--i];
			// Swap the last item with the item at the selected position
			a[i] = a[j];
			a[j] = x;
		} return a;
	}
	
	
	
	var skillW = $(window).width(),
		skillH = $(window).height();
	
	/* trigger when page is ready */
	$(document).ready(function (){
		
		
		
		/*
			Select random Skills pill
		*
		var items = $(".pill li");
		items.addClass('off');
		shuffle(items);
		nextItem(items);
		*/
		
	
	});
	
	
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		
	});

})(window.jQuery);




