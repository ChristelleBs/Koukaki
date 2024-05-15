document.addEventListener("DOMContentLoaded", function () {
  // Initialise Swiper
  let mySwiper = new Swiper(".swiper-container", {});
});
document.addEventListener("DOMContentLoaded", function () {
  // Initialiser Swiper
  let mySwiper = new Swiper(".mySwiper", {
    loop: true, // Pour activer la boucle
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
});
