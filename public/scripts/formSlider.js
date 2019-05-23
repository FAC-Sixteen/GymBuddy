const backButton = document.getElementById("back-button");
backButton.style.visibility = "hidden";

const first = document.querySelector(".page-one");
const second = document.querySelector(".page-two");
const third = document.querySelector(".page-three");

const nextButton = document.getElementById("next-button");

const slides = [first, second, third];

nextButton.addEventListener("click", e => {
  e.preventDefault();
  console.log(slides);

  slides.forEach((x, i) => {
    if (!x.classList.contains("container-hide")) {
      x.classList.add("container-hide");
    } else {
      x.classList.remove("container-hide");
    }
  });
});
