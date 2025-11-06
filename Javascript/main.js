const swiper = new Swiper('.presentwork .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.presentwork .swiper-pagination',
    clickable : true,
    type : "bullets",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.presentwork .swiper-button-next',
    prevEl: '.presentwork .swiper-button-prev',
  },
});

const swiper2 = new Swiper('.projects .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.projects .swiper-pagination',
    clickable : true,
    type : "bullets",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.projects .swiper-button-next',
    prevEl: '.projects .swiper-button-prev',
  },
});