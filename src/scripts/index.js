/*----------funcionamento dp scroll lateral do projects----------*/
let elementsbar = document.querySelector('.slider-bar');
let elementSlider = elementsbar.querySelector('.slider-itens');
let elementsdaughters = Array.from(elementSlider.children);

elementsdaughters.forEach((item) => {
    let duplicateElement = item.cloneNode(true);

    elementSlider.appendChild(duplicateElement);
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

/*----------Funcionamento deo bottão da nav-----------*/

const buttonHamburguerNav = document.querySelector('.hamburguer');
const navigationbar = document.querySelector('.navigation')
const iconsSocials = document.querySelector('.social-links')
const iconsSections = document.querySelector('.sections')

buttonHamburguerNav.addEventListener('click', () =>{
    activeIconsNav();
    removeOpacity();
})

function activeIconsNav() {
    navigationbar.classList.toggle('active-nav');
    buttonHamburguerNav.classList.toggle('background-hamburguer-active');
}

function removeOpacity(){
    iconsSocials.style.opacity = '100%';
    iconsSections.style.opacity = '100%';
    
}