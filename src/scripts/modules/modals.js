
export function setupCards() {
    const cards = document.querySelectorAll('.magic-card');
    const shadowModal = document.querySelector('.container-modal');
    const allContent = document.querySelector('.all-content');
    const modals = {
        html: document.querySelector('.modal-html'),
        card: document.querySelector('.modal-card'),
        css: document.querySelector('.modal-css'),
        js: document.querySelector('.modal-js'),
        git: document.querySelector('.modal-git'),
        design: document.querySelector('.modal-design')
    };

    const closeModalCards = document.querySelectorAll('.close-modal');

    closeModalCards.forEach(closer => {
        closer.addEventListener('click', closeAllModals);
    });

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            openModal(index);
        });
    });

    function closeAllModals() {
        allContent.style.overflow = 'visible';
        shadowModal.style.display = 'none';
        Object.values(modals).forEach(modal => {
            modal.style.display = 'none';
        });
    }

    function openModal(index) {
        const modalKeys = Object.keys(modals);
        if (index < modalKeys.length) {
            shadowModal.style.display = 'flex';
            modals[modalKeys[index]].style.display = 'flex';
            allContent.style.overflow = 'hidden';
        }
    }
}

export function setupProjectModals() {
    const screenProjects = document.querySelectorAll('.screen');
    const containerModalProjects = document.querySelector('.container-modal-projects');
    const projectSamples = [
        document.querySelector('.project-sampling-one'),
        document.querySelector('.project-sampling-two')
    ];
    const closeModalProjects = document.querySelectorAll('.close-project');
    const allContent = document.querySelector('.all-content');

    screenProjects.forEach((project, index) => {
        project.addEventListener('click', () => {
            openProjectModal(index);
        });
    });

    closeModalProjects.forEach(closeProject => {
        closeProject.addEventListener('click', closeProjectModals);
    });

    function openProjectModal(index) {
        if (index < projectSamples.length) {
            allContent.style.overflow = 'hidden';
            containerModalProjects.style.display = 'flex';
            projectSamples[index].style.display = 'flex';
        }
    }

    function closeProjectModals() {
        allContent.style.overflow = 'visible';
        containerModalProjects.style.display = 'none';
        projectSamples.forEach(sample => {
            sample.style.display = 'none';
        });
    }
}
