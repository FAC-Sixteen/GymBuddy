// this file is incomplete TODO:
// 1. add back button
// 2. add conditionals for if age, name or gender selections are/ are not emitted 

const form = document.querySelector('.form-main');
const pageOne = document.querySelector('.page-one');
const pageTwo = document.querySelector('.page-two');
const buttonRight = document.querySelector('.btn__arrow-right');

pageTwo.style.visibility = 'hidden';

buttonRight.addEventListener('click', (e) => {
    e.preventDefault();
    pageOne.style.display = 'none';
    pageTwo.style.visibility = 'visible'; 
});

