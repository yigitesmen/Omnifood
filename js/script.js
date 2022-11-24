const header = document.querySelector('.header')
const mobileNavBtn = document.querySelector('.mobile-nav-btn')
const mainNavLinks = document.getElementsByClassName('main-nav-link')
const heroSection = document.getElementById('hero')
const currYear = document.querySelector('.curr-year')

// Set current year
currYear.textContent = new Date().getFullYear()

// Make mobile navigation work
mobileNavBtn.addEventListener('click', () => {
    header.classList.toggle('nav-open')
})
for (const link of mainNavLinks) {
    link.addEventListener('click', () => {
        if (header.classList.contains('nav-open')) header.classList.remove('nav-open')
    })
}

// Sticky navigation
new IntersectionObserver(elements => {
    elements[0].isIntersecting
        ? document.body.classList.remove('sticky')
        : document.body.classList.add('sticky')
}, {
    root: null,
    threshold: 0,
    rootMargin: '-80px'
}).observe(heroSection)