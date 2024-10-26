document.addEventListener('DOMContentLoaded', () => {
    let swiper = new swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swipper-pagination'
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEL: '.swiper-button-prev'
        }
    })
})

document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowLeft') {
        swiper.slidePrev();
    } else if(event.key === 'ArrowRight') {
        swiper.slideNext()
    }
})