/* Create HTML5 elements for ancient browsers */
document.createElement('header')
document.createElement('footer')
document.createElement('nav')
document.createElement('article')
document.createElement('section')
/* end Create HTML5 elements for ancient browsers */

$(function() {
	$('.js-cigars').slick({
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 5,
		dots: false,
//		autoplay: true,
		focusOnSelect: true,
		speed: 800,
		prevArrow: $('.js-cigars-left'),
		nextArrow: $('.js-cigars-right')
	});

	 $('.js-main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.js-main-cigars-left'),
		nextArrow: $('.js-main-cigars-right'),
		fade: true,
		asNavFor: '.js-cigars-nav'
	});
	$('.js-cigars-nav').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		asNavFor: '.js-main-slider',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		prevArrow: $('.js-cigars-left'),
		nextArrow: $('.js-cigars-right')
	});
	
	
	$('.js-fade-slider').slick({
		dots: false,
		infinite: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		slide: '.frontpage-slide',    
		speed: 800,
		prevArrow: $('.js-fade-left'),
		nextArrow: $('.js-fade-right')
	});
	
	function smoothScroll(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    }
    $('.js-smooth-scroll-link').bind('click', smoothScroll);
    
    
    
})
