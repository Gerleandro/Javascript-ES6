const activeClass = 'ativo';

function iniTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section'); 

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add(activeClass);
    }

    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove(activeClass);
        });
        tabContent[index].classList.add(activeClass);
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        });
    });
};

iniTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');

    if (accordionList.length) {
        
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        };

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    };
};

initAccordion();

function initScrollSuave() { // nao funcionou
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(e) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        
    };

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
    
};

initScrollSuave();

function initAnimationScroll() {

    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
    const winScreenMid = window.innerHeight * 0.6;

    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - winScreenMid) < 0;
            if(isSectionVisible) {
                section.classList.add(activeClass);
            } else {
                section.classList.remove(activeClass);
            }
        });
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
    };
};
initAnimationScroll();