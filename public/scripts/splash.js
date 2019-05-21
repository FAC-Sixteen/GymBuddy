//splash

const buttonRightArrow = document.querySelector('.btn__arrow-right');

buttonRightArrow.style.visibility = 'hidden';

const displayButton = () => {
    setTimeout(() => buttonRightArrow.style.visibility = 'visible', 2000);
}

document.onload = displayButton();