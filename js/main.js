document.getElementById("burger").onclick = function () {
      document.getElementById("nav").classList.toggle("active");
      document.getElementById("burger").classList.toggle("active");
};

new Swiper(".swiper", {
      navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
      },
      pagination: {
            el: ".swiper-pagination",
            clickable: true,
      },
});

new Swiper(".quotes__swiper", {
      pagination: {
            el: ".swiper-pagination2",
            clickable: true,
      },
      spaceBetween: 64,
      slidesPerView: 1,
      allowTouchMove: true,
});
