const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  speed: 1000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1000: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      allowSlidePrev: true,
      allowSlideNext: true,
    }
  }
});