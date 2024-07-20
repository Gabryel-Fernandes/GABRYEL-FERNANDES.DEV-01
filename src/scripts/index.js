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

excuteButton.addEventListener('mouseenter', () => {
    moveArrow.classList.add('active-arrow')
})

excuteButton.addEventListener('mouseout', () => {
    moveArrow.classList.remove('active-arrow')
})

/*----------Funcionamento deo bottão da nav-----------*/

const buttonHamburguerNav = document.querySelector('.hamburguer');
const navigationbar = document.querySelector('.navigation')
const iconsSocials = document.querySelector('.social-links')
const iconsSections = document.querySelector('.sections')

buttonHamburguerNav.addEventListener('click', () => {
    activeIconsNav();
    removeOpacity();
})

function activeIconsNav() {
    navigationbar.classList.toggle('active-nav');
    buttonHamburguerNav.classList.toggle('background-hamburguer-active');
}

function removeOpacity() {
    iconsSocials.style.opacity = '100%';
    iconsSections.style.opacity = '100%';

}

/*-----------funcionamento das cartas-------------*/


const cards = document.querySelectorAll('.magic-card')
const shadowModal = document.querySelector('.container-modal')
const allContent = document.querySelector('.all-content')

const modalHtml = document.querySelector('.modal-html')
const modalCard = document.querySelector('.modal-card')
const modalCss = document.querySelector('.modal-css')
const modalJs = document.querySelector('.modal-js')
const modalGit = document.querySelector('.modal-git')
const modalDesign = document.querySelector('.modal-design')

const closeModalCards = document.querySelectorAll('.close-modal')


closeModalCards.forEach((closer) => {
    closer.addEventListener('click', ()=>{
        allContent.style.overflow = 'visible';
        shadowModal.style.display = 'none';
        modalHtml.style.display = 'none';
        modalCard.style.display = 'none';
        modalCss.style.display = 'none';
        modalJs.style.display = 'none';
        modalGit.style.display = 'none';
        modalDesign.style.display = 'none';
    })
})


cards.forEach(() => {
    openAndCloseModal();
});


function openAndCloseModal() {
    cards[0].addEventListener('click', () => {
        shadowModal.style.display = 'flex';
        modalHtml.style.display = 'flex';
        allContent.style.overflow = 'hidden';
    });

    cards[1].addEventListener('click', () => {
        shadowModal.style.display = 'block';
        modalCard.style.display = 'flex';
        allContent.style.overflow = 'hidden';
    });

    cards[2].addEventListener('click', () => {
        shadowModal.style.display = 'block';
        modalCss.style.display = 'flex';
        allContent.style.overflow = 'hidden';
    });

    cards[3].addEventListener('click', () => {
        shadowModal.style.display = 'block';
        modalJs.style.display = 'flex';
        allContent.style.overflow = 'hidden';
    });

    cards[4].addEventListener('click', () => {
        shadowModal.style.display = 'block';
        modalGit.style.display = 'flex';
        allContent.style.overflow = 'hidden';
    });

    cards[5].addEventListener('click', () => {
        shadowModal.style.display = 'block';
        modalDesign.style.display = 'flex';
        allContent.style.overflow = 'hidden';
    });
}

