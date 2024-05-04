document.addEventListener('DOMContentLoaded', () => {
    let burger_btn = document.querySelector('.navbar__mobile-btn')

    burger_btn.addEventListener('click', () => {
        burger_btn.classList.toggle('transform')
    })
})