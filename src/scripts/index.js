import { setupCvDownload } from './modules/cv.js';
import { setupProjectSlider } from './modules/slider.js';
import { setupArrowButton } from './modules/button.js';
import { setupHamburguerNav } from './modules/nav.js';
import { setupCards, setupProjectModals } from './modules/modals.js';

document.addEventListener('DOMContentLoaded', () => {
    setupCvDownload();
    setupProjectSlider();
    setupArrowButton();
    setupHamburguerNav();
    setupCards();
    setupProjectModals();
});
