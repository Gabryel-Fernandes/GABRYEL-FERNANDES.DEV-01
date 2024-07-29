export function setupProjectSlider() {
    const elementsBar = document.querySelector('.slider-bar');
    const elementSlider = elementsBar.querySelector('.slider-itens');
    const elementsDaughters = Array.from(elementSlider.children);

    elementsDaughters.forEach(item => {
        const duplicateElement = item.cloneNode(true);
        elementSlider.appendChild(duplicateElement);
    });
}
