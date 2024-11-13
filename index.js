// ABOUT FUNCTIONALITY
var tabLinks = document.getElementsByClassName('tab-links')
var tabContents = document.getElementsByClassName('tab-contents')
var opentab = (tabName) => {
    for (tabLink of tabLinks) {
        tabLink.classList.remove('active-link')
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabName).classList.add('active-tab')
}



// SCROLL-TOP BUTTON FUNCTIONALITY
window.onscroll = function () {
    const scrollTopButton = document.getElementById("scrollTopButton");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopButton.classList.add("show");
    } else {
        scrollTopButton.classList.remove("show");
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// DOM LOADING FUNCTIONALITY
document.addEventListener("DOMContentLoaded", function () {
    const loadingIndicator = document.getElementById("loadingIndicator");
    setTimeout(() => {
        loadingIndicator.classList.add("fade-out");
    }, 500);
});


// DARK / LIGHT MODE FUNCTIONALITY
const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
let currentTheme = localStorage.getItem('theme') || 'light-mode';
if (currentTheme === 'dark-mode') {
    document.body.classList.add('dark-mode');
    sunIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
}

themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
        localStorage.setItem('theme', 'dark-mode');
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
        localStorage.setItem('theme', 'light-mode');
    }
});


// SCROLL-REVEAL FUNCTIONALITY
ScrollReveal({
    duration: 1500,
    distance: '100px',
    delay: 200,
    easing: 'ease-in-out',
    reset: true
});

ScrollReveal().reveal('.home-content, .head-name, .contact-left, .streak-head, .service, .contact, .about, .resume, .project', { origin: 'top' });

ScrollReveal().reveal('.home-img, .services-list, .work-list, .contact-right, .tab-titles, .moving-boxes, .github-streak, .move-second, .work-bottom', { origin: 'bottom' });

ScrollReveal().reveal('.head-name, .about-col-1, .work-2, .github-lang, .move-first, .work-left, .social-media, .my-languages', { origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-col-2, nav, .github-stats, .move-third, .work-right, .my-tools, .about+p', { origin: 'right' });



// TYPEWRITER EFFECT MULTIPLE-TEXT FUNCTIONALITY
const typed = new Typed('.multiple-text', {
    strings: ['Full-Stack Web Developer', 'Front-End Developer', 'Back-End Developer'],
    typeSpeed: 80,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
    // showCursor: true,
    // cursorChar: '|'
})


// SMOOTH SCROLLING FUNCTIONALITY FOR ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// POP-UP FUNCTIONALITY
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const popupText = document.getElementById('popup-text');
const learnMoreButtons = document.querySelectorAll('.learn-more-btn');

learnMoreButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const content = button.getAttribute('data-content');
        popupText.textContent = content;
        popup.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});




// FORM SUBMIT FUNCTIONALITY
(function () {
    emailjs.init("rasWsXPgqWUVirRgD");
})();

const form = document.getElementById('contact-form');
const msg = document.getElementById('msg');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    try {
        await emailjs.sendForm('service_r06vv9o', 'template_e35dvhd', this);
        msg.textContent = 'Message Sent Successfully! ✅';
        msg.style.color = 'green';
        form.reset();
        setTimeout(() => {
            msg.textContent = '';
        }, 3000);

    } catch (error) {
        msg.textContent = 'Failed To Send The Message. Please Try Again.';
        msg.style.color = 'red';
        console.log('Error:', error);
        alert(`Error: ${error}`);
        setTimeout(() => {
            msg.textContent = '';
        }, 3000);
    }
});

