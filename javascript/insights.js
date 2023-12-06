// Hamburger Menu
// I referred to https://www.youtube.com/watch?v=flItyHiDm7E and used ChatGPT to debug when writing the JS code of hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navigation = document.querySelector('.navigation');

    hamburgerMenu.addEventListener('click', function () {
        navigation.classList.toggle('show');
    });
});

// Filter Menu
// I referred to https://www.youtube.com/watch?v=RKfMtCNx1z0&t=1s and used ChatGPT to debug when writing the JS code of filter button
document.addEventListener("DOMContentLoaded", function() {

    const filterButtons = document.querySelectorAll(".filter-button button");
    const filterableCards = document.querySelectorAll(".filterable-cards .card");

    const filterCards = (e) => {
        const selectedCategory = e.target.dataset.name;

        filterButtons.forEach((button) => {
            button.classList.remove("active");
        });

        e.target.classList.add("active");

        filterableCards.forEach((card) => {
            if (selectedCategory === "all" || selectedCategory === card.dataset.name) {
                card.style.display = "inline-block";
            } 
            else {
                card.style.display = "none";
            }
        });
    };

    filterButtons.forEach((button) => button.addEventListener("click", filterCards));
});
