$(document).ready(function(){
  $('.single-item').slick({
    nextArrow:false,
    prevArrow:false,
    dots:true,
    fade:true
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: false,
    nextArrow:false,
    prevArrow:false
  });
});
