import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

{
  // Initialize Swiper
const swiper = new Swiper('.swiper', {
  // Optional: Add your configuration options here
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  // Autoplay configuration
  autoplay: {
    delay: 5000, // Set the delay between slides in milliseconds (5 seconds in this case)
    disableOnInteraction: false, // Allow manual interaction to interrupt autoplay
  },

});
}


{
  const swiper01 = new Swiper('#swiper-brand', {
    loop: true,
    slidesPerView: 5,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 5,
      },
    },
    autoplay: false,
    mousewheel: false, // Mouse tekerleği kontrolünü devre dışı bırak
    grabCursor: true,
  });
  
  
}









