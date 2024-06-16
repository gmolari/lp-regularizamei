document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  new Glide(".glide", {
    type: "carousel",
    focusAt: "center",
    perView: 2,
    gap: 16,
    breakpoints: {
      640: {
        perView: 1,
        gap: 0
      },
    },
  }).mount();
});
