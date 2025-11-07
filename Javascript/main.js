

// JS 연동
import {dom} from './ui/dom.js';
import * as MODAL from './ui/modalcontrol.js';
import * as SWIPER from './ui/swipercontrol.js';


// 슬라이더 활성화
SWIPER.createNoneNavSwiper('.presentwork')
SWIPER.createNavSwiper('.projects');
SWIPER.createNavSwiper('.projectmodal');


// AddEventListener

// 키다운 감지
document.addEventListener('keydown', whatKeyDown);

// 모달 열기
dom.projectModalBtn.forEach(x => {
  x.addEventListener('click', MODAL.openModal)
});

// 모달 닫기
dom.closemodalbtn.addEventListener('click', MODAL.closeModal);


// 키다운 분기
function whatKeyDown(e){
  if(e.key === 'Escape'){
    if(MODAL.isActiveModal){
      e.preventDefault();
      MODAL.closeModal();
    }
  }
}


// ScrollMagic 사용법
// init controller
const controller = new ScrollMagic.Controller();

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(x){
  // console.log(x, index);
  
  // create a scene
  new ScrollMagic.Scene({
    triggerElement : x, // 감시할 장면 추가 및 옵션 지정
    triggerHook : 0.7   // 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
    .setClassToggle(x, 'show')  // 요소가 화면에 보이면 show 클래스 추가
    .addTo(controller); // 컨트롤러에 장면 할당(필수!!)
});

const topBtnActiveArea = document.querySelector('#about');
const topBtnContainArea = document.querySelector('.topbtn');

checkTopBtnScroll(topBtnActiveArea, topBtnContainArea)

function checkTopBtnScroll(sectorArea, showArea) {

  // create a scene
  new ScrollMagic.Scene({
    triggerElement : sectorArea, // 감시할 장면 추가 및 옵션 지정
    triggerHook : 0   // 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
    .setClassToggle(showArea, 'show')  // 요소가 화면에 보이면 show 클래스 추가
    .addTo(controller); // 컨트롤러에 장면 할당(필수!!)
}

const menuBtn = document.querySelector('.hambugerbtn');
const mobileNav = document.querySelector('.header .nav');
const navCategories = mobileNav.querySelectorAll('a');

navCategories.forEach(x => {
  x.addEventListener('click', mobileMenuControl)
});
menuBtn.addEventListener('click', openMenu);

function openMenu(){
  mobileNav.classList.toggle('show');
}

function mobileMenuControl(){
  if(mobileNav.classList.contains('show'))
    mobileNav.classList.remove('show');
}