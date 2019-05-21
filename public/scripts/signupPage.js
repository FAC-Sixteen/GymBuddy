const form = document.querySelector('.form-main');
const pageOne = document.querySelector('.page-one');
const pageTwo = document.querySelector('.page-two');
const buttonRight = document.querySelector('.btn__arrow-right');
const domName = document.querySelector('.dom-name');
const secondButtonRight = document.querySelectorAll('.btn__arrow-right')[1];
const inputText = document.querySelector('.input-text');
const btnRoundLarge = document.querySelector('.btn__round-large');
const inputAge = form.childNodes[1].childNodes[3].childNodes[4];
const ageReading = document.querySelector('.age-reading');
const distanceReading = document.querySelector('.distance-reading');
const ageSlider = document.querySelectorAll('.slider')[0];
const distanceSlider = document.querySelectorAll('.slider')[1];

console.log(distanceReading);
console.log(ageReading);
console.log(ageSlider.value);

// console.log(inputText)
// this file is incomplete TODO:
// 1. Feature/add back button
// 2. Feature/add conditionals for if age, name or gender selections are/ are not emitted 
// 3. Fix/Currently emulating splash functionality is causing the timeout function to be called again from conduct -> signup page.



// signUpPage

pageTwo.style.visibility = 'hidden';

buttonRight.addEventListener('click', (e) => {
    e.preventDefault();
    if (!inputText.validity.valueMissing || !inputAge.validity.valueMissing) {
        pageTwo.classList.remove('container-hide');
        pageOne.classList.add('container-hide');
        pageTwo.style.visibility = 'visible'; 
    } 
    else {
        inputText.style.borderColor = 'red';
        inputText.placeholder = 'name required';
        inputAge.style.borderColor = 'red';
        inputAge.placeholder = 'age required';
    }
    // if (!inputAge.validity.patternMismatch){
    //     TODO
    // }
});

secondButtonRight.addEventListener('click', (e) => {
    e.preventDefault();
    form.submit();
})

ageSlider.addEventListener('click', (e) => {
    ageReading.innerHTML = 'e.target.value';
})