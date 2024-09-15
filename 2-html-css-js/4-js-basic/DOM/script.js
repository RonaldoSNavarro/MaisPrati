let titulo = document.getElementById('titulo')
console.log(titulo.textContent)

titulo.textContent = "Aula de JS Básico"
console.log(titulo.textContent)

titulo.innerHTML = "Mudei o conteudo do título novamente"

titulo.style.color = "blue"

let botao = document.getElementById('botao')

botao.addEventListener('click', () => {
    alert('você clicou no botão!')
})

let novoParagrafo = document.createElement('p')

novoParagrafo.innerHTML = "Este é um parágrafo criado pelo js"

document.body.appendChild(novoParagrafo)

let parágrafo = document.querySelector('.paragrafo')

novoParagrafo.remove()