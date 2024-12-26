const toggleIcon = document.querySelector('.menu');
        const menuList = document.querySelector('.menu-list');

        let isOpen = false;

        toggleIcon.addEventListener('click', () => {
            if (isOpen) {
                isOpen = false;
            } else {
                isOpen = true;
            }
            menuList.classList.toggle('show');
        });

        // Function to change the icon source based on isOpen state
        function updateIcon() {
            if (isOpen) {
                toggleIcon.src = 'images/icon-close-menu.svg';
            } else {
                toggleIcon.src = 'images/icon-menu.svg';
            }
        }
 // Call updateIcon function after DOM content is loaded
 document.addEventListener('DOMContentLoaded', () => {
    updateIcon();
});


//Feature arrow down
const arrow = document.querySelector('.arrow-down');
        const dropdown = document.querySelector('.dropdown');

        let isActive = false;

        arrow.addEventListener('click', () => {
            if (isActive) {
                isActive = false;
            } else {
                isActive = true;
            }
            dropdown.classList.toggle('show');
        });

        // Function to change the icon source based on isOpen state
        function updateIcon() {
            if (isActive) {
                arrow.src = 'images/icon-arrow-up.svg';
            } else {
                arrow.src = 'images/icon-arrow-down.svg';
            }
        }
 // Call updateIcon function after DOM content is loaded
 document.addEventListener('DOMContentLoaded', () => {
    updateIcon();
});
        


//Company arrow down
const arrowIcon = document.querySelector('.company-arrow-down');
        const companyDropdown = document.querySelector('.company-dropdown');

        let isCurrent = false;

        arrowIcon.addEventListener('click', () => {
            if (isCurrent) {
                isCurrent = false;
            } else {
                isCurrent = true;
            }
            companyDropdown.classList.toggle('show');
        });

        // Function to change the icon source based on isOpen state
        function updateIcon() {
            if (isCurrent) {
                arrowIcon.src = 'images/icon-arrow-up.svg';
            } else {
                arrowIcon.src = 'images/icon-arrow-down.svg';
            }
        }
 // Call updateIcon function after DOM content is loaded
 document.addEventListener('DOMContentLoaded', () => {
    updateIcon();
});