// Set current year
const year = document.getElementById('year')
year.textContent = new Date().getFullYear()

// Make mobile navigation work
const header = document.getElementsByClassName('header')[0]
const mobileNavBtn = document.getElementsByClassName('mobile-nav-btn')[0]
mobileNavBtn.addEventListener('click', () => {
    header.classList.toggle('nav-open')
})