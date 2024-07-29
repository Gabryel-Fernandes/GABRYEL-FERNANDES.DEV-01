export function setupArrowButton() {
    const executeButton = document.querySelector('.contact');
    const moveArrow = document.querySelector('.arrow');

    executeButton.addEventListener('mouseenter', () => {
        moveArrow.classList.add('active-arrow');
    });

    executeButton.addEventListener('mouseleave', () => {
        moveArrow.classList.remove('active-arrow');
    });
}
