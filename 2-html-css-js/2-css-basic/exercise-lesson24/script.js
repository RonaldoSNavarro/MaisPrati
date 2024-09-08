const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

// Função para habilitar/desabilitar o botão de envio
form.addEventListener('input', () => {
    const allFieldsValid = form.checkValidity();
    submitBtn.disabled = !allFieldsValid;
});

// Impede o envio se o formulário não estiver validado
form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
        event.preventDefault();
    }
});
