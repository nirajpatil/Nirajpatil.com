/* Niraj Patil - Functions
-------------------------------------------------------- */

$(window).load(function() {


/* External Links
------------------------------------------------*/

	$('a[rel="external"]').bind('click', function(e) {

		e.preventDefault();
		window.open($(this).attr('href'));

	});


/* Fading out galaxy on scroll
------------------------------------------------*/

	$('#page-sparkart .group').waypoint(function(down) {

		$('.galaxy .ring').removeClass('fade-to-white');
		$('.galaxy .ring').addClass('fade-to-black');

	});

	$('#page-sparkart .masthead').waypoint(function(up) {

		$('.galaxy .ring').removeClass('fade-to-black');
		$('.galaxy .ring').addClass('fade-to-white');

	});


/* End Load
------------------------------------------------*/

});
