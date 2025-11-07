
export function createSwiper(area, { pagination=true, navigation=true, loop=true } = {}){
  return new Swiper(`${area} .swiper`, {
    direction: 'horizontal',
    loop,
    // spread operator + 삼항연산자 + 오브젝트 리턴
    // pagination(파라미터) ? 리턴 오브젝트{ swiper property object } : 리턴 오브젝트{ null }
    ...(pagination ? { pagination: { el: `${area} .swiper-pagination`, clickable:true } } : {}),
    ...(navigation ? { navigation: { nextEl: `${area} .swiper-button-next`, prevEl: `${area} .swiper-button-prev` } } : {})
  });
}
