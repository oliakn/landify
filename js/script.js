document.querySelector('.header_menu').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('show')
    document.querySelector('.header_menu').classList.toggle('active')
})
document.querySelectorAll('.nav__item').forEach(e => e.addEventListener('click', () => {
    document.querySelector('.nav').classList.remove('show')
    document.querySelector('.header_menu').classList.remove('active')
}))