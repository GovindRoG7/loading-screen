const dots = document.querySelector('.loading_dots')

const addAnimation = () => {
    dots.classList.add('animate')
    setTimeout(() => {
        dots.classList.remove('animate')

        setTimeout(() => { addAnimation()
        }, 100)
    }, 2800)
}

addAnimation()

