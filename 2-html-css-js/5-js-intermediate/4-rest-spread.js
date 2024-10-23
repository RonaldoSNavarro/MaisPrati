// ---------------------------------------------
// 1. Operador Spread em Arrays
// ---------------------------------------------
let numeros = [1, 2, 3]

// Usando o operador spread para criar um novo array, adicionando 4 e 5

let novosNumeros = [...numeros, 4, 5] 

console.log(novosNumeros)// Saída: [1, 2, 3, 4, 5]


// ---------------------------------------------
// 2. Operador Spread em Objetos
// ---------------------------------------------

let pessoa = {nome: "Ronaldo", idade: 37}

// Usando o spread para adicionar uma nova propriedade 'cidade' ao objeto
let novaPessoa = {...pessoa, cidade: 'Belém'}

console.log(novaPessoa)

// ---------------------------------------------
// 3. Usando Spread em Funções
// ---------------------------------------------
function soma(a, b, c) {
    return a + b + c
}

let numeros = [1, 2, 3]

// Usando o spread para passar elementos do array como argumentos individuais
console.log(soma(...numeros)) // Saída: 6


// ---------------------------------------------
// 4. Usando o Operador Rest em Funções
// ---------------------------------------------
function soma (...numeros) {
    // Usando reduce para somar todos os números recebidos
    return numeros.reduce((total, numero) => total + numero)
}

// Chamando a função com múltiplos argumentos
console.log(soma(1, 2, 3, 4, 5)) // Saída: 15

// ---------------------------------------------
// 5. Desestruturação de Arrays com Rest
// ---------------------------------------------
const [primeiro, segundo, ...resto] = [1, 2, 3, 4, 5]

console.log(primeiro) // saida 1
console.log(segundo) // saida 2
console.log(resto) // Saída: [3, 4, 5]

// ---------------------------------------------
// 6. Desestruturação de Objetos com Rest
// ---------------------------------------------
const pessoa = {nome: 'Slash', idade: 60, banda: 'Guns n Roses'}
const {nome, ...outrasInfo} = pessoa

console.log(nome) // Saída: Slash
console.log(outrasInfo) // Saída: idade: 60 e banda: Guns n Roses

// Crie uma função chamada calculaMedia que aceita uma quantidade
// indefinida de notas de estudantes e calcula a média dessas notas.

// instruções:

// Use o operador rest para capturar todas as notas passadas como argumentos.
// Dentro da função, some todas as notas e divida pela quantidade de notas para calcular
// a média.

let notas = [7, 7, 7, 5]

function calculaMedia (...notas) {
    return notas.reduce((total, valorAtual) => total + valorAtual) / (notas.length)
}

console.log(calculaMedia(...notas))

// Imagine que você está desenvolvendo um sistema de e-commerce e precisa
// mesclar os dados de um cliente com uma atualização recente. Os dados antigos
// estão em um objeto, e os dados novos chegam em outro.
// Utilixe o operador spread para criar um novo objeto contendo as
// informações atualizadas.

//

// Use o operador spread para combinar os dois objetos, dando prioridade aos
// dados mais recentes.

const cliente = {
    nome: 'Ozzy Osbourne',
    cpf: '00000000056',
    telefone: '91-992712138'
}

const novosDados = {
    telefone: '91-992710506',
    endereco: 'Paranoid Street, 666',
    cidade: 'Birminghan',
    pais: 'England'
}


const clienteFinal = {...cliente, ...novosDados}

console.log(clienteFinal)

// Suponha que você tem uma lista de produtos em um carrinho de compras e
// deseja adicionar novos produtos sem modificar o array original. Use o
// operador spread para criar uma nova lista de produtos.

// Instruções:

// Use o operador spread para adicionar novos itens a um array já existente

let carrinho = ['coca cola', 'limao', 'banana']

let novosProdutos = [...carrinho, 'maçã', 'suco', 'yogurte']


console.log(novosProdutos)