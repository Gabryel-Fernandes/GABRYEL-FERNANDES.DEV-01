export function setupHamburguerNav() {
    const buttonHamburguerNav = document.querySelector('.hamburguer');
    const navigationbar = document.querySelector('.navigation');
    const iconsSocials = document.querySelector('.social-links');
    const iconsSections = document.querySelector('.sections');

    buttonHamburguerNav.addEventListener('click', () => {
        toggleIconsNav();
        removeOpacity(iconsSocials, iconsSections);
    });

    function toggleIconsNav() {
        navigationbar.classList.toggle('active-nav');
        buttonHamburguerNav.classList.toggle('background-hamburguer-active');
    }

    function removeOpacity(...elements) {
        elements.forEach(element => {
            element.style.opacity = '100%';
        });
    }
}
