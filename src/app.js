import { plus } from './plus.js';
import './style.css';
import tiger from './tiger.png';

// console.log(plus(2, 4));

document.addEventListener('DOMContentLoaded', () => {
  document.body.innerHTML = `<img src="${tiger}">`;
});