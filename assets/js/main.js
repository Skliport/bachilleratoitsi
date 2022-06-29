//=================================
// SCROLL REVEAL CONFIGURATIONS
//=================================
const configs = {
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset: true,
};

//=================================
// DELAY 200ms
//=================================
const d200 = {
    delay: 200,
};

//=================================
// DELAY 400ms
//=================================
const d400 = {
    delay: 400,
};

//=================================
// INTERVAL 200ms
//=================================
const i200 = {
    interval: 200,
};

//=================================
// INTERVAL 400ms
//=================================
const i400 = {
    interval: 400,
};

//=================================
// RESET ANIMATION DISABLED
//=================================
const noAnimationReset = {
    reset: false,
};

//=================================
// ANIMATION FROM BOTTOM CONFIG
//=================================
const fromBottom = {
    origin: 'bottom',
};

//=================================
// ANIMATION FROM LEFT CONFIG
//=================================
const fromLeft = {
    origin: 'left',
};

//=================================
// MANAGE ACTIVE CLASS FOR NAVBAR
//=================================
const sections = document.getElementsByClassName('section-page');

const manageActiveClass = () => {
    const position = document.documentElement.scrollTop;
    for (let i = 0; i < sections.length; i++) {
        if (
            position >= sections.item(i).offsetTop - sections.item(i).offsetHeight * 0.4 &&
            position < sections.item(i).offsetTop + sections.item(i).offsetHeight - sections.item(i).offsetHeight * 0.4
        ) {
            const currentID = sections.item(i).id;

            const navLinks = document.getElementsByClassName('nav-link');

            for (let j = 0; j < navLinks.length; j++) {
                navLinks.item(j).classList.remove('active');
            }

            document.querySelector(`a[href="#${currentID}"]`).classList.add('active');
        }
    }
};

//=================================
// NAVBAR BACKGROUND AND ACTIVE CLASS ON SCROLL
//=================================
const navBackgroundHandler = () => {
    const nav = document.getElementById('navbar');

    window.scrollY > 0 ? nav.classList.add('bg-insa-nav') : nav.classList.remove('bg-insa-nav');
};

onscroll = () => {
    manageActiveClass();
    navBackgroundHandler();
};

onload = () => {
    manageActiveClass();
    navBackgroundHandler();
};

//=================================
// ANIMATIONS
//=================================
const animation = ScrollReveal({ ...configs, ...noAnimationReset });

animation.reveal('.seccion1', { ...d200 });

animation.reveal('.image-year', { ...d200, ...i200 });

animation.reveal('.profile', { ...fromBottom });

animation.reveal('.image1', { ...fromLeft });

animation.reveal('.docente', { ...d200, ...i400 });

animation.reveal('.from-left', { ...fromLeft });

animation.reveal('.from-bottom', { ...fromBottom });
