// Set current year
const year = document.getElementById('year')
year.textContent = new Date().getFullYear()

// Make mobile navigation work
const header = document.getElementsByClassName('header')[0]
const mobileNavBtn = document.getElementsByClassName('mobile-nav-btn')[0]
mobileNavBtn.addEventListener('click', () => {
    header.classList.toggle('nav-open')
})
const mainNavLinks = document.getElementsByClassName('main-nav-link')
for (const link of mainNavLinks) {
    link.addEventListener('click', () => {
        if (header.classList.contains('nav-open')) header.classList.remove('nav-open')
    })
}