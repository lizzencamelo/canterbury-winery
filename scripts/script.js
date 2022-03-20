const firstColour =  '#ffffff';
const secondColour = '#010705';
const contrastColour = '#450000';

const navBg = document.querySelector('.navbar-nav');

const estateTop = document.getElementById('estate').offsetTop;
const contactTop = document.getElementById('contact').offsetTop;
const footerTop = document.querySelector('.footer').offsetTop;

function updateScroll() {
    navScroll = navBg.offsetTop + navBg.offsetHeight + document.documentElement.scrollTop;
    if (navScroll >= estateTop && navScroll < contactTop) {
        navBg.style.backgroundColor = contrastColour;
    }
    else if (navScroll >= contactTop && navScroll < footerTop) {
        navBg.style.backgroundColor = firstColour;
    }
    else if (navScroll >= footerTop) {
        navBg.style.backgroundColor = secondColour;
    }
    else {
        navBg.style.backgroundColor = firstColour;
    }
}

window.addEventListener('scroll', updateScroll);