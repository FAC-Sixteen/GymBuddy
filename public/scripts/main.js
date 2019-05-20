const form = document.querySelector('.form-main');
const pageOne = document.querySelector('.page-one');
const pageTwo = document.querySelector('.page-two');
const buttonRight = document.querySelector('.btn__arrow-right');
const domName = document.querySelector('.dom-name');
const secondButtonRight = document.querySelectorAll('.btn__arrow-right')[1];
const inputText = document.querySelector('.input-text');
const btnRoundLarge = document.querySelector('.btn__round-large');
// console.log(inputText);
// console.log(domName);
console.log(secondButtonRight)
// console.log(inputText)
// this file is incomplete TODO:
// 1. Feature/add back button
// 2. Feature/add conditionals for if age, name or gender selections are/ are not emitted 
// 3. Fix/Currently emulating splash functionality is causing the timeout function to be called again from conduct -> signup page.



// signUpPage

pageTwo.style.visibility = 'hidden';

buttonRight.addEventListener('click', (e) => {
    e.preventDefault();
    pageTwo.classList.remove('container-hide');
    pageOne.classList.add('container-hide');
    pageTwo.style.visibility = 'visible'; 
});

secondButtonRight.addEventListener('click', (e) => {
    e.preventDefault();
    form.submit();
})

