// Hamburger menu
// I referred to https://www.youtube.com/watch?v=flItyHiDm7E and used ChatGPT to debug when writing the JS code of hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navigation = document.querySelector('.navigation');

    hamburgerMenu.addEventListener('click', function () {
        navigation.classList.toggle('show');
    });
});
