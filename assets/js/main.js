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
// NAVBAR BACKGROUND ON SCROLL
//=================================
onscroll = () => {
    const nav = document.getElementById('navbar');

    window.scrollY > 0
        ? nav.classList.add('bg-dark')
        : nav.classList.remove('bg-dark');
};

//=================================
// ANIMATIONS
//=================================
const animation = ScrollReveal({ ...configs });

animation.reveal('.seccion1', { ...d200 });

animation.reveal('.image-year', { ...d200, ...i200 });
