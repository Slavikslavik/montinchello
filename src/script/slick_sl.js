$(document).ready(function(){
    $('.slick_slider').slick({
        infinite: true,
        dots:true,
        vertical:true,
        verticalSwiping: true,
        arrows:false,

    });
   
  });

  $(document).ready(function(){
    $('.news_slick-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:true,
        prevArrow: "<img src='img/previous_arrow.png' class='slick-prev' alt='1'>",
        nextArrow: "<img src='img/next_arrow.png' class='slick-next' alt='2'>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
    });
  });
