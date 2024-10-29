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

    const gameInput = document.getElementById('gameInput')

    gameInput.addEventListener('keypress', function (event) {
        if(event.key === 'Enter') {
            let searchGame = gameInput.value.trim().toUpperCase()

            switch(searchGame) {
                case 'MARIO':
                    swiper.slideTo(0)
                    break

                case 'POKEMON':
                    swiper.slideTo(1)
                    break

                default:
                    alert('Jogo não encontrado');
                    break
            }
        }
    })

    const EmailModalBtn = document.getElementById('OpenEmailModal')
    const emailModal = document.getElementById('emailModal')
    const closeEmailModalBtn = emailModal.querySelector('.close')

    EmailModalBtn.addEventListener('click', function () {
        emailModal.style.display = 'block'
    })
})