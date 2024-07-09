/*----------funcionamento dp scroll lateral do projects----------*/
let elementsbar = document.querySelector('.slider-bar');
let elementSlider = elementsbar.querySelector('.slider-itens');
let elementsdaughters = Array.from(elementSlider.children);

elementsdaughters.forEach((item) => {
    let duplicateElement = item.cloneNode(true);

    elementSlider.appendChild(duplicateElement);
    console.log(item);
})

/*----------funcionamento da flecha button-----------*/

let excuteButton = document.querySelector('.contact');
let moveArrow = document.querySelector('.arrow');

excuteButton.addEventListener('mouseenter', () =>{
    moveArrow.classList.add('active-arrow')
})

excuteButton.addEventListener('mouseout', () =>{
    moveArrow.classList.remove('active-arrow')
})
