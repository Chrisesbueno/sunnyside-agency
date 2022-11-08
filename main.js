const menu = document.querySelector('.open')

menu.addEventListener('click', () => {
    menu.parentElement.classList.toggle('active')
})