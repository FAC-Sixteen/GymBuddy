const modal = document.querySelector("#gyModal");
const modalBtn = document.querySelector("#modalBtn");
const close = document.querySelector(".close");

modalBtn.addEventListener("click", e => {
  e.preventDefault();
  modal.style.display = "block";
});

close.addEventListener("click", e => {
  e.preventDefault();
  modal.style.display = "none";
});

window.addEventListener("click", event => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
