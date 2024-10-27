document.addEventListener('DOMContentLoaded',function() {
    let swiper = new Swiper('.swiper', {
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

    document.addEventListener('keydown', function(event) {
        if(event.key === 'ArrowLeft') {
            swiper.slidePrev();
        } else if(event.key === 'ArrowRight') {
            swiper.slideNext()
        }
    })
})