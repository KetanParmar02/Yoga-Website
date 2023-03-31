/* ===================== TOGGLE NAV LINK =================== */

const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add("show-menu")
    })
}

if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove("show-menu")
    })
}

/* ================     =================== */

const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navmenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ================ ADD BLUR TO HEADER =================== */
const blurHeader = () =>{
    const header = document.getElementById("header")

    this.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header")
}
window.addEventListener('scroll', blurHeader)


/* ================= SHOW SCROLL UP ====================== */
const scrollUP = () => {
    const scrollUp = document.getElementById("scroll-up")
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove("show-scroll")
}

window.addEventListener('scroll', scrollUP)

/* =================== SCROLL SECTION ACTIVE LINK ====================== */
const sections = document.querySelectorAll("section[id]")

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav_menu a[href*=' +  sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


/* ==================== DARK THEME ===================== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'


if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const sr = ScrollReveal({
    origin : 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home_data, .list_container, .join_content, .footer_container`)
sr.reveal(`.home_image`, {origin: 'bottom'})
sr.reveal(`.health_image, .routine_images, .follow_img-3`, {origin: 'left'})
sr.reveal(`.health_data, .routine_data, .follow_img-4`, {origin: 'right'})
sr.reveal(`.follow_data, .follow_content-1 img`, {interval: 100})