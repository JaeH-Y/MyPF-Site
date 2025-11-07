
import {dom} from './dom.js';

export function openMobileMenu(){
  dom.mobileNav.classList.toggle('show');
}

export function mobileMenuControl(){
  if(dom.mobileNav.classList.contains('show'))
    dom.mobileNav.classList.remove('show');
}