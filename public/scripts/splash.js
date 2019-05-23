//splash

const button = document.querySelector(".splash-button");

button.style.visibility = "hidden";

const displayButton = () => {
  setTimeout(() => (button.style.visibility = "visible"), 2000);
};

window.onload = displayButton();
