export const $ = (sel, root=document) => root.querySelector(sel);
export const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];

export const dom = {

  // 영역 변수

  // View Section 변수
  presentWork: $('.presentwork'),

  // About Section 변수
  about: $('#about'),

  // Project Section 변수
  projects: $('.projects'),

  // TopBtn div 변수
  topBtn: $('.topbtn'),

  // 모달 div 변수
  projectModal: $('.projectmodal'),
  pmTitle: $('.pmtitle'),
  pmimgArr: $$('.pmcontent .pmbody .swiper img'),
  closemodalbtn: $('.closemodalbtn'),
  modalPrevBtn: $('.projectmodal .pmcontent .pmbody .swiper-button-prev'),
  modalNextBtn: $('.projectmodal .pmcontent .pmbody .swiper-button-next'),

  // 모달 열기 변수(프로젝트 소속)
  projectsection: $('.projects'),
  projectModalBtn: $$('.projectmodalbtn'),

  // 이벤트 변수
  scrollEls: $$('section.scroll-spy'),

  // 모바일 변수(반응형)
  hambugerbtn: $('.hambugerbtn'),
  mobileNav: $('.header .nav'),
  mobileNavEls: $$('.header .nav a'),
};