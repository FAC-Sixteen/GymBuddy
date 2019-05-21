const ageReading = document.querySelector('.age-reading');
const distanceReading = document.querySelector('.distance-reading');
const ageSlider = document.querySelectorAll('.slider')[0];
const distanceSlider = document.querySelectorAll('.slider')[1];
const form = document.getElementById('searchPrefs');
const btnSubmit = form.childNodes[21].childNodes[1];
const collapsibles = document.querySelectorAll('.collapsible');
const genderCollap = collapsibles[0];
const expCollap = collapsibles[1];
const goalCollap = collapsibles[2];
const gender = document.querySelectorAll('.gender');
const exp = document.querySelectorAll('.exp');
const goals = document.querySelectorAll('.goals');

console.log([...collapsibles])




ageSlider.addEventListener('input', (e) => {
    ageReading.innerHTML = `${e.target.value} years old`;
});

distanceSlider.addEventListener('input', (e) => {
    distanceReading.innerHTML = `${e.target.value} km`;
});

    [...collapsibles].map(x => x.addEventListener('click', (e) => {
        e.preventDefault();
        x.classList.toggle("active");
        if (genderCollap.classList.contains("active")) {
            gender[0].classList.remove('container-hide');
            gender[1].classList.remove('container-hide');
        }
        else {
            gender[0].classList.add('container-hide');
            gender[1].classList.add('container-hide');
        }
        if (expCollap.classList.contains("active")) {
            exp[0].classList.remove('container-hide');
            exp[1].classList.remove('container-hide');
        }
        else {
            exp[0].classList.add('container-hide');
            exp[1].classList.add('container-hide');
        }
        if (goalCollap.classList.contains("active")) {
            goals[0].classList.remove('container-hide');
            goals[1].classList.remove('container-hide');
        }
        else {
            goals[0].classList.add('container-hide');
            goals[1].classList.add('container-hide');
        }
    }));
    
        
        
// btnSubmit.addEventListener('submit', (e) => {
//     form
// });