/* Niraj Patil - Functions
-------------------------------------------------------- */

$(window).load(function() {

/* External Links
------------------------------------------------ */

	$('a[rel="external"]').bind('click', function(e) {

		e.preventDefault();
		window.open($(this).attr('href'));

	});


/* Home Page Animation Sequence
------------------------------------------------ */

//1. Logo animates on hover (whoa awesome!)
//$('.logo').hover(function(){

	//$(this).addClass('animated dip');

//}, function(){

	//$(this).removeClass('animated dip');

//});

//2. Stars fade in.
$('#page-home').waypoint(function() {
	
	$('.stars.front').addClass('animated fall');
	$('.stars.back').addClass('animated fall');

});

//4. First row of tickets fade in
$('#page-home .manmadeit small').waypoint(function(down) {

	$('.ticket.top').addClass('animated fall');

});

//4. Second row of tickets fade in
$('#page-home .manmadeit .water').waypoint(function(down) {

	$('.ticket.middle').addClass('animated fall');

});

//4. Third row of tickets fade in
$('#page-home .redbox').waypoint(function(down) {

	$('.ticket.bottom').addClass('animated fall');

});

//5. Third row of tickets fade in
$('#page-home .redbox').waypoint(function(down) {

	$('.ticket.bottom').addClass('animated fall');

});

//5. Third row of tickets fade in
$('#page-home .redbox').waypoint(function(down) {

	$('.ticket.bottom').addClass('animated fall');

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
