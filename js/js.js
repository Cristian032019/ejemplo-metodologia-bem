const hamburgerWrapper = document.querySelector('.header__hamburger');

hamburgerWrapper.addEventListener('click', () => {
    hamburgerWrapper.classList.toggle('active');
});