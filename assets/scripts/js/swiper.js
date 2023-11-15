import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

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
