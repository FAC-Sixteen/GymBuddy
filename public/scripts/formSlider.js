const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
const createProfileButton = document.getElementById("create-profile-button");

const first = document.querySelector(".page-one");
const second = document.querySelector(".page-two");
const third = document.querySelector(".page-three");

backButton.style.visibility = "hidden";
createProfileButton.style.visibility = "hidden";

const slides = [first, second, third];

let slideIndex = 1;

nextButton.addEventListener("click", e => {
  e.preventDefault();
  console.log(slides);
  showSlides((slideIndex += 1));
  backButton.style.visibility = "visible";
});

backButton.addEventListener("click", e => {
  e.preventDefault();
  showSlides((slideIndex += -1));
});

const showSlides = n => {
  if (n <= 1) {
    backButton.style.visibility = "hidden";
  }

  if (n >= slides.length) {
    nextButton.style.visibility = "hidden";
    createProfileButton.style.visibility = "visible";
  } else {
    nextButton.style.visibility = "visible";
    createProfileButton.style.visibility = "hidden";
  }

  slides.forEach(x => {
    x.style.display = "none";
  });

  slides[slideIndex - 1].style.display = "block";
};
