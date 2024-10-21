// Slider configuration (using Swiper.js)
var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Fetch API for loading services dynamically
fetch('https://api.exemplo.com/servicos')
    .then(response => response.json())
    .then(data => {
        const servicesContainer = document.querySelector('.cards');
        data.services.forEach(service => {
            const card = `
                <div class="card">
                    <h3>${service.name}</h3>
                    <p>${service.description}</p>
                </div>`;
            servicesContainer.innerHTML += card;
        });
    })
    .catch(error => {
        console.error('Erro ao carregar serviços:', error);
    });

// Fetch API for loading testimonials dynamically
fetch('https://api.exemplo.com/testemunhos')
    .then(response => response.json())
    .then(data => {
        const depoimentosContainer = document.querySelector('.depoimentos');
        data.testimonials.forEach(testimonial => {
            const depoimento = `
                <div class="depoimento" data-aos="fade-up">
                    <img src="${testimonial.photo}" alt="${testimonial.name}">
                    <h3>${testimonial.name}</h3>
                    <p>${testimonial.text}</p>
                </div>`;
            depoimentosContainer.innerHTML += depoimento;
        });
    })
    .catch(error => {
        console.error('Erro ao carregar depoimentos:', error);
    });

// Form validation and submission with EmailJS
document.getElementById('form-contato').addEventListener('submit', function (event) {
    event.preventDefault();

    // Form validation logic
    const nome = event.target.nome.value;
    const email = event.target.email.value;
    const telefone = event.target.telefone.value;
    const mensagem = event.target.mensagem.value;

    if (nome && email && telefone && mensagem) {
        emailjs.sendForm('service_id', 'template_id', this)
            .then(() => alert('Mensagem enviada com sucesso!'))
            .catch(error => alert('Erro ao enviar a mensagem: ' + error));
    } else {
        alert('Preencha todos os campos!');
    }
});