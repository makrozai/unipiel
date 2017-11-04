$(document).ready(function(){
  $('.single-item').slick({
    dots:false,
    autoplay:true,
    infinite: true,
    fade:true
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: false,
    nextArrow:false,
    prevArrow:false
  });
});
