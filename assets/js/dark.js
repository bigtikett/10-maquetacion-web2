document.addEventListener('DOMContentLoaded', () => {
    let switcher = document.querySelector('.switcher__btn')
    let light = document.querySelector('.switcher__icon-light')
    let dark = document.querySelector('.switcher__icon-dark')
    let iconLight = document.querySelector('.navbar__logo-light')
    let iconDark = document.querySelector('.navbar__logo-dark')

    switcher.addEventListener('click', () => {
        let head = document.head;

        let link = document.createElement('link')
        link.rel = 'stylesheet'
        link.type = 'text/css'
        link.href = 'assets/css/dark.css'
        link.id = 'theme-dark'


        let theme_dark = document.querySelector('#theme-dark')

        if(theme_dark) {
            head.removeChild(theme_dark)
            light.style.display = 'block'
            dark.style.display = 'none'
            iconLight.style.display = 'block'
            iconDark.style.display = 'none'
        }
        else {
            head.appendChild(link)
            light.style.display = 'none'
            dark.style.display = 'block'
            iconLight.style.display = 'none'
            iconDark.style.display = 'block'
        }

        

    })
})