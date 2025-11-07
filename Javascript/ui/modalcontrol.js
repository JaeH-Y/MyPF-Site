
import {dom} from './dom.js';


export function openModal(e){

  // 버블링 방지
  e.stopPropagation()
  // 중복 실행 방지
  if(dom.projectModal.style.display === 'flex') return;
  
  // 클래스 확인(몇번째 프로젝트에서 버튼 눌렀는지)
  const classArr = [...e.target.classList];
  // 프로젝트 픽업(swiper div에 담긴 클래스가 더 바깥에 있어서 Selector만 해도 됨)
  const project = dom.projectsection.querySelector(`.${classArr[classArr.length -1]}`);
  // 슬라이더 추출
  const sliderArr = [...project.querySelectorAll('.swiper-slide')];
  // 슬라이더 순서 재정렬(한바퀴 돌고나면 순서 밀리는 현상 있음)
  const sorted = sliderArr.sort((a, b) => {
    const aNum = parseInt(a.getAttribute('aria-label').split(' / ')[0]);
    const bNum = parseInt(b.getAttribute('aria-label').split(' / ')[0]);
    return aNum - bNum;
  });

  // 이미지 삽입(대표 4장만)
  for(let i=0; i<dom.pmimgArr.length; i++){
    const imgEl = sorted[i].querySelector('img');
    dom.pmimgArr[i].src = imgEl.src;
  }
  // 제목 삽입
  dom.pmTitle.textContent = project.querySelector('.project-present > h3').textContent;
  
  // 모달 띄우기
  dom.projectModal.style.display = 'flex';
}

export function closeModal(){
  dom.projectModal.style.display ='none';
}

export function isActiveModal(){
  if(dom.projectModal.style.display === 'flex'){
    return true;
  }
  return false;
}

export function prevImg(){
  dom.modalPrevBtn.click();
}

export function nextImg(){
  dom.modalNextBtn.click();
}
