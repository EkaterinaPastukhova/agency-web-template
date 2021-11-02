const menuBtn = document.querySelector('.mobile-menu-btn.menu');
const navMenu = document.querySelector('.nav-menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        navMenu.classList.add('menu-open');
        menuOpen = true;

    } else {
        menuBtn.classList.remove('open');
        navMenu.classList.remove('menu-open');
        menuOpen = false;
    }

})


const navLinks = document.querySelectorAll('.with-children');
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', (event) => {
        event.preventDefault();
        const activeNavLink = document.querySelector('.with-children.active');
        if (activeNavLink) {
            activeNavLink.classList.remove('active');
        }
        navLink.classList.add('active')
    })

})

