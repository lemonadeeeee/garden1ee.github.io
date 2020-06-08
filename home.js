$(document).ready(function(){
    $('.showevents').slick({
      accessibility:true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
    });
    $('#left').click(function(){
        $('.showevents').slick('slickPrev');
    });
    $('#right').click(function(){
        $('.showevents').slick('slickNext');
    });
  });