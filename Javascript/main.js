const swiper = new Swiper('.presentwork .swiper', {
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
  },

  // Navigation arrows
  navigation: {
    nextEl: '.projects .swiper-button-next',
    prevEl: '.projects .swiper-button-prev',
  },
});

const modalswiper = new Swiper('.projectmodal .swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.projectmodal .swiper-pagination',
    clickable : true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.projectmodal .swiper-button-next',
    prevEl: '.projectmodal .swiper-button-prev',
  },
});


// 모달 변수
const projectModal = document.querySelector('.projectmodal');
const pmTitle = projectModal.querySelector('.pmtitle');
const pmimgArr = [...projectModal.querySelectorAll('.pmcontent .pmbody .swiper img')];
const closemodalbtn = projectModal.querySelector('.closemodalbtn');

// 모달 열기 변수(프로젝트 소속)
const projectModalBtn = document.querySelectorAll('.projectmodalbtn');

// 모달 열기
projectModalBtn.forEach(x => {
  x.addEventListener('click', openModal)
});

// 모달 Esc 바인딩 변수
let modalEsc;

function openModal(e){

  // 버블링 방지
  e.stopPropagation()
  // 중복 실행 방지
  if(modalEsc != null) return;
  // 클래스 확인(몇번째 프로젝트에서 버튼 눌렀는지)
  const classArr = [...e.target.classList];
  // 프로젝트 픽업
  const project = document.querySelector(`.projects .${classArr[classArr.length -1]}`);
  // 슬라이더 추출
  const sliderArr = [...project.querySelectorAll('.swiper-slide')];
  // 슬라이더 순서 재정렬(한바퀴 돌고나면 순서 밀리는 현상 있음)
  const sorted = sliderArr.sort((a, b) => {
    const aNum = parseInt(a.getAttribute('aria-label').split(' / ')[0]);
    const bNum = parseInt(b.getAttribute('aria-label').split(' / ')[0]);
    return aNum - bNum;
  });

  // 이미지 삽입(대표 4장만)
  for(let i=0; i<pmimgArr.length; i++){
    const imgEl = sorted[i].querySelector('img');
    pmimgArr[i].src = imgEl.src;
  }
  // 제목 삽입
  pmTitle.textContent = project.querySelector('.project-present > h3').textContent;

  // 닫기 버튼 이벤트핸들러 추가
  closemodalbtn.addEventListener('click', closeModal);
  modalEsc = window.addEventListener('keydown', checkEscape)
  projectModal.style.display = 'flex';

}

function closeModal(){
  projectModal.style.display ='none';

  closemodalbtn.removeEventListener('click', closeModal);
  if(modalEsc != null){
    modalEsc.removeEventListener('keydown', checkEscape);
    modalEsc = null;
  }
}

function checkEscape(e){
  if(e.key === 'Escape') closeModal();
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
menuBtn.addEventListener('click', openMenu);

function openMenu(){
  mobileNav.classList.toggle('show');
}