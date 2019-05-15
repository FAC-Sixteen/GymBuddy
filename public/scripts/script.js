const displayButton = () => {
    const welcomeButton = document.getElementById('find_buddy_button');
    setTimeout(() => welcomeButton.style.display = 'inline', 2000)
}

document.onload = displayButton();

