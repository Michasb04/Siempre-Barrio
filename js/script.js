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

/* Hero Animations */

sr.reveal('.navlist', {delay:200, origin:'right', reset:false});
sr.reveal('.logo-text',{delay:200,origin:'left',reset:false});
sr.reveal('.hero-text',{delay:200,origin:'left',reset:true});
sr.reveal('.icons',{delay:400, origin: 'bottom', reset:false});
sr.reveal('.hero-img',{delay:500, origin:'right'});

/* Products Animations */
sr.reveal('.section-products',{delay:200, origin:'left'});

/* Contact Animatios*/
sr.reveal('.section-contact',{delay:200,origin:'right', reset:true});
sr.reveal('.contact-icons',{delay:200,origin:'bottom', reset:true});

sr.reveal('.contact-icons',{delay:200,origin:'bottom', reset:true});
//Footer animations
sr.reveal('.footer',{delay:100,origin:'bottom', reset:false});
// Show borderbox deppending to page status 

