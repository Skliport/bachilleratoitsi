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
// MANAGE ACTIVE CLASS FOR NAVBAR
//=================================
const sections = document.getElementsByClassName('section-page');

const manageActiveClass = () => {
    const position = document.documentElement.scrollTop;
    for (let i = 0; i < sections.length; i++) {
        if (
            position >=
                sections.item(i).offsetTop -
                    sections.item(i).offsetHeight * 0.5 &&
            position <
                sections.item(i).offsetTop +
                    sections.item(i).offsetHeight -
                    sections.item(i).offsetHeight * 0.5
        ) {
            const currentID = sections.item(i).id;

            const navLinks = document.getElementsByClassName('nav-link');

            for (let j = 0; j < navLinks.length; j++) {
                navLinks.item(j).classList.remove('active');
            }

            document
                .querySelector(`a[href="#${currentID}"]`)
                .classList.add('active');
        }
    }
};

//=================================
// NAVBAR BACKGROUND AND ACTIVE CLASS ON SCROLL
//=================================
onscroll = () => {
    manageActiveClass();
    const nav = document.getElementById('navbar');

    window.scrollY > 0
        ? nav.classList.add('bg-dark')
        : nav.classList.remove('bg-dark');
};

onload = () => {
    manageActiveClass();
};

//=================================
// ANIMATIONS
//=================================
const animation = ScrollReveal({ ...configs });

animation.reveal('.seccion1', { ...d200 });

animation.reveal('.image-year', { ...d200, ...i200 });
