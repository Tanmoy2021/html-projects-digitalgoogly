function openNav() {
	document.getElementById("navbarSupportedContent15").style.width = "100%";
  }
  
  function closeNav() {
	document.getElementById("navbarSupportedContent15").style.width = "0";
	window.location.reload();
  }
  /*-- Bx logo Slider JS --*/
  $('.bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 4,
    slideWidth: 189,
    slideMargin: 0,
    ticker: true,
    speed: 50000
});
/*-- sticky Header --*/
$(window).scroll(function(){
  if ($(window).scrollTop() >= 300) {
      $('nav').addClass('fixed-header');
      $('nav div').addClass('visible-title');
  }
  else {
      $('nav').removeClass('fixed-header');
      $('nav div').removeClass('visible-title');
  }
});
  