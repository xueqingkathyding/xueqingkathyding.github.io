// Hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navigation = document.querySelector('.navigation');

    hamburgerMenu.addEventListener('click', function () {
        navigation.classList.toggle('show');
    });
});

// Filter button
// I referred to https://www.youtube.com/watch?v=RKfMtCNx1z0&t=1s and used ChatGPT to debug when writing the JS code of filter button
document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-button button");
    const contents = document.querySelectorAll('.about-content');

    const showContent = (selectedCategory) => {
        contents.forEach(function (content) {
            content.style.display = 'none';
        });

        var targetContent = document.querySelector('.about-content[data-name="' + selectedCategory + '"]');
        if (targetContent) {
            targetContent.style.display = 'block';
        }

        filterButtons.forEach((button) => {
            button.classList.remove("active");
        });

        const activeButton = document.querySelector('.filter-button button[data-name="' + selectedCategory + '"]');
        if (activeButton) {
            activeButton.classList.add("active");
        }
    };

    // Check for the filter query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');

    // Set the default filter based on the query parameter or a default value
    const defaultFilter = filterParam || 'company';

    showContent(defaultFilter);

    const filterContent = (e) => {
        const selectedCategory = e.target.dataset.name;
        showContent(selectedCategory);
    };

    filterButtons.forEach((button) => button.addEventListener("click", filterContent));
});