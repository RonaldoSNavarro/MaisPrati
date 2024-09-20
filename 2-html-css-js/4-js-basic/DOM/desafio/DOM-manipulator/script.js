
titulo.style.color = "blue"

let botaoAdicionar = document.getElementById('botao-adicionar')
let botaoRemover = document.getElementById('botao-remover')

botaoAdicionar.addEventListener('click', () => {
    let novoItem = document.createElement('li')
    

    novoItem.innerHTML = "Item "
    titulo.innerHTML = "Novo item adicionado"

    document.body.appendChild(novoItem)
})


botaoRemover.addEventListener('click', () => {
    let removeItem = document.querySelector('li')

    removeItem.remove()
    titulo.style.color = "green"
    titulo.innerHTML = "Item removido"

    if (removeItem.children = ) {
        titulo.style.color = "grey"
        titulo.innerHTML = "Não há mais itens para remover"
    }

})
