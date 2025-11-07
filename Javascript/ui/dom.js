export const $ = (sel, root=document) => root.querySelector(sel);
export const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];

export const dom = {

  // View Section 변수
  presentWork: $('.presentwork'),
  // Project Section 변수
  projects: $('.projects'),

  // 모달 div 변수
  projectModal: $('.projectmodal'),
  pmTitle: $('.pmtitle'),
  pmimgArr: $$('.pmcontent .pmbody .swiper img'),
  closemodalbtn: $('.closemodalbtn'),

  // 모달 열기 변수(프로젝트 소속)
  projectsection: $('.projects'),
  projectModalBtn: $$('.projectmodalbtn'),
};