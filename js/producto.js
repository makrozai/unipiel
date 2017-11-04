$(document).ready(function(){
  $('.single-item').slick({
    dots:true,
    autoplay:false,
    infinite: true,
    fade:true,
    nextArrow:false,
    prevArrow:false
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: false,
    nextArrow:false,
    prevArrow:false
  });
});
