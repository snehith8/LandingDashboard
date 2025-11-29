/* ------------------------ MOBILE MENU TOGGLE ------------------------ */
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

/* ------------------------ ACTIVE NAV LINK ON SCROLL ------------------------ */
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function setActiveNav() {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 200;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navItems.forEach(link => {
        link.classList.remove("active-section");

        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active-section");
        }
      });
    }
  });
}

window.addEventListener("scroll", setActiveNav);

/* ------------------------ SCROLL REVEAL ANIMATION ------------------------ */
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 150; // Trigger point before element enters view

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);

/* ------------------------ SMOOTH SCROLL FOR ANCHOR LINKS ------------------------ */
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});