$(document).ready(function(){

  var flag = false;
  var scroll;

  $(window).scroll(function(){
    scroll = $(window).scrollTop();

    if(scroll > 50){
      if(!flag){
        $(".main-nav__slide").css({"display": "none"});
        flag = true;
      }
    }else{
      if(flag){
        $(".main-nav__slide").css({"display": "block"});
        flag = false;
      }
    }
  });
  window.onload =function()
  {
    var btnUnete;
    btnUnete = document.getElementById("main-button");
    btnUnete.onclick = apareceMenu;

    var owlClip;
    owlClip = $(".owl-item");
    owlClip.click(function() {
      $(".circle-box").html(owlClip.html());
    });
  }
  function apareceMenu()
  {
    $(".main-menu__content").toggleClass("active");
  }
  function cambia()
  {
    //$(".js-carousel circle-box").html(contenido);
    console.log("hola");
  }
});
$(function() {
      $('#slides').slidesjs({
        width: 940,
        height: 528,
        navigation: {
          effect: "fade"
        },
        pagination: {
          active: false
        },
        play:{
          auto:true
        },
        effect: {
          fade: {
            speed: 400
          }
        }
      });
    });

$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay:true,
    asNavFor: '.slider-nav'
  });
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow:false,
    prevArrow:false,
    adaptiveHeight:true
  });
});