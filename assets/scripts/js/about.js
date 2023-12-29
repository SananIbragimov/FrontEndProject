{
    const swiper2 = new Swiper('#swiper-brand', {
        loop: true,
        slidesPerView: 5,
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
        autoplay: false,
    });

}