$(function() {

	$('button.menu').toggle(function(e) {

		// Open Nav, Change to Close Button
		$('header nav').slideDown();
		$(this).html('&#x2421;');
		$(this).addClass('close');

	}, function(){
	
		// Close Nav, Change to Open Button
		$('header nav').slideUp();
		$(this).html('&#xE9A1;');
		$(this).removeClass('close');
	
	});
	
	$(window).resize(function(){
	
		var windowWidth = $(window).width();
	
		// Remove Nav Hiding for Small Screens
		if (windowWidth > 619) {
	
			$('header nav').removeAttr('style');
		
		} else {
	
			// Open the Nav if it was previously open before resizing the window
			if ($('button.menu').hasClass('close')){
			
				$('header nav').show();
			
			}
		
		}
	
	});

})