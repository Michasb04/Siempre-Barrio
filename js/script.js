let menu = document.querySelector('#menu-icon');
let navlist =document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal (
    {
        distance: '65px',
        duration: 2600,
        delay: 450,
        reset: true
    }
);

/* Main Animations */

sr.reveal('.logo-text',{delay:200,origin:'left',reset:false});
sr.reveal('.navlist', {delay:200, origin:'right', reset:false});
sr.reveal('.nosotros-text',{delay:200, origin: 'top'});
sr.reveal('.logo-img',{delay:500, origin: 'right'});
sr.reveal('.icons',{delay:400, origin: 'left', reset:false});

/* Products Animations */
sr.reveal('.section-products',{delay:200, origin:'left'});

/* Form Animatios*/
sr.reveal('.section-contact',{delay:200,origin:'right'});

// Show borderbox deppending to page status 

