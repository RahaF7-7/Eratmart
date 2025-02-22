// init Isotope
var $products = $('.all-products').isotope({
    // options
    originLeft: false
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $products.isotope({ filter: filterValue });
  });


  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      "@1.00": {
        slidesPerView: 6,
        spaceBetween: 15,
      },
      // "@1.50": {
      //   slidesPerView: 4,
      //   spaceBetween: 50,
      // },
    },
  });