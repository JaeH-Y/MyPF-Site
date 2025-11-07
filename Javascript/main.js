

// JS 연동
// document
import {dom} from './ui/dom.js';
// 로직
import * as MODAL from './ui/modalcontrol.js';
import * as SWIPER from './ui/swipercontrol.js';
import * as SCROLL from './ui/scrollmagic.js';
import * as MOBILE from './ui/mobileAction.js';

// 슬라이더 활성화
SWIPER.createSwiper('.presentwork',{pagination : false})
SWIPER.createSwiper('.projects');
SWIPER.createSwiper('.projectmodal');


// AddEventListener

// 키다운 감지
document.addEventListener('keydown', whatKeyDown);

// 모달 열기
dom.projectModalBtn.forEach(x => {
  x.addEventListener('click', MODAL.openModal)
});

// 모달 닫기
dom.closemodalbtn.addEventListener('click', MODAL.closeModal);

// 반응형 Menu 버튼 클릭 이벤트
dom.hambugerbtn.addEventListener('click', MOBILE.openMobileMenu);

// 반응형 Nav a 클릭 이벤트
dom.mobileNavEls.forEach(x => {
  x.addEventListener('click', MOBILE.mobileMenuControl)
});

// 키다운 분기
function whatKeyDown(e){
  if(MODAL.isActiveModal){
    if(e.key === 'Escape'){
      e.preventDefault();
      MODAL.closeModal();
      return;
    }
    if(e.key === 'ArrowLeft'){
      e.preventDefault();
      MODAL.prevImg();
      return;
    }
    if(e.key === 'ArrowRight'){
      e.preventDefault();
      MODAL.nextImg();
      return;
    }
  }
}

// ScrollEvent 추가

// 자기 자신의 ScrollEvent
dom.scrollEls.forEach(function(x){
  SCROLL.addScrollMagic(x,0.7);
});

// about위치에 따른 TopBtn 노출
SCROLL.addScrollMagic(dom.about,0,dom.topBtn);

