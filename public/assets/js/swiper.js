import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';
const swiper = new Swiper('.swiper', {
  slidesPerView: 1.5,
  spaceBetween: 40,
  
  slidesOffsetAfter: 0,
  breakpoints: {
    375: {
      slidesPerView: 1.7,
      slidesPerView: 'auto',
      centeredSlides: true,
      slidesOffsetBefore: 0,
    },
    500: {
      slidesPerView: 'auto',
      centeredSlides: false,
    },
    748: {
      slidesOffsetBefore: -60,
      slidesOffsetAfter: -20,
      centeredSlides: false,
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3.7,
    },
    1280: {
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      slidesPerView: 3,
    },
  }
});
