$(function() {
    //карусель отзывов
    $('.js-reviews-carousel').slick({
        dots: true, 
        arrows: true, 
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });
    $('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
