/*
	Global Variables
*/
var videoHeight = null;
var headerHeight = null;
var isMenuOpen = false;
var isVideoOpen = false;
var counter = 0;
var images = ['img/image.jpeg', 'img/image1.jpeg', 'img/image2.jpeg'];

/*
	Execute once document is ready...
*/
$(document).ready(function() {
	headerHeight = $('header').height();
	/*
		Scroll to Top
	*/
	$('.scroll-to-top').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
    
});




	


/*
	Execute on scroll...
*/
$(window).scroll(function() {
	/*
		Parallax Header
	*/ 
    var offsetDistance = 100;
	var offsetAmount = -($(window).scrollTop() * 0.25) + offsetDistance;
	$('.coverbg').css({
		'background-position-y': offsetAmount
	});

	/*
		Fixed/Static Navigation
	*/
	var scrollAmount = $(window).scrollTop();
	if (scrollAmount > $(window).height()) {
        console.log('fixed');
		$('nav').css({
			'position': 'fixed'
		});
		$('.menu-button').css({
			'color': 'black'
		});
		$('.scroll-to-top').show();
	} else {
        console.log('absolute');
		$('nav').css({
			'position': 'absolute'
		});
		$('.menu-button').css({
			'color': 'ivory'
		});
		$('.scroll-to-top').hide();
	}
});