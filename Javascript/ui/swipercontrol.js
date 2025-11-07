
export function createNavSwiper(area){
  const navSwiper = new Swiper(`${area} .swiper`, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: `${area} .swiper-pagination`,
      clickable : true,
    },

    // Navigation arrows
    navigation: {
      nextEl: `${area} .swiper-button-next`,
      prevEl: `${area} .swiper-button-prev`,
    },
  });
}

export function createNoneNavSwiper(area){
  const noneSwiper = new Swiper(`${area} .swiper`, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    /* pagination: {
      el: '.presentwork .swiper-pagination',
      clickable : true,
    }, */

    // Navigation arrows
    navigation: {
      nextEl: `${area} .swiper-button-next`,
      prevEl: `${area} .swiper-button-prev`,
    },
  });
}