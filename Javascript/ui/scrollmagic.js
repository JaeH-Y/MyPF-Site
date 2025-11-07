
const controller = new ScrollMagic.Controller();

export function addScrollMagic(trigerEl,hook,setEl = trigerEl){

  const magic = new ScrollMagic.Scene({
    // 감시할 장면 추가 및 옵션 지정
    triggerElement : trigerEl,
    // 화면의 특정 지점에서 보여짐 여부 감시
    // ((가득참 0) ~ (요소 보이기 시작 1) 사이 지정)
    triggerHook : hook   
  })
    // 요소가 화면에 보이면(조건 만족 시) 
    // show 클래스 추가
    .setClassToggle(setEl, 'show')  
    .addTo(controller);
}