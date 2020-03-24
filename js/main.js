$(function(){
	$('.burger').click(function(){
		$('.header__menu').slideToggle(500);
	});

  // BAR

  

	$('.slider__items').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow:"<button type='button' class='slick-prev slick-btn main-prev'></button>",
  nextArrow:"<button type='button' class='slick-next slick-btn main-next'></button>",
  infinite: false
	});

  $('[data-fancybox="images"]').fancybox({
  afterLoad : function(instance, current) {
    var pixelRatio = window.devicePixelRatio || 1;

    if ( pixelRatio > 1.5 ) {
      current.width  = current.width  / pixelRatio;
      current.height = current.height / pixelRatio;
    }
  }
});

  
});







