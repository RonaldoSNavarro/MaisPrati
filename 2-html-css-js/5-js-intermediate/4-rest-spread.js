// let numeros = [1, 2, 3]
// let novosNumeros = [...numeros, 4, 5]

// console.log(novosNumeros)


// // spread com objetos

// let pessoa = {nome: "Ronaldo", idade: 37}
// let novaPessoa = {...pessoa, cidade: 'Belém'}

// console.log(novaPessoa)

// function soma(a, b, c) {
//     return a + b + c
// }

// let numeros = [1, 2, 3]
// console.log(soma(...numeros))


// rest

function soma (...numeros) {
    return numeros.reduce((total, numero) => total + numero)
}

console.log(soma(1, 2, 3, 4, 5))

const [primeiro, segundo, ...resto] = [1, 2, 3, 4, 5]

console.log(primeiro)
console.log(segundo)
console.log(resto)

const pessoa = {nome: 'Slash', idade: 60, banda: 'Guns n Roses'}
const {nome, ...outrasInfo} = pessoa

console.log(nome)
console.log(outrasInfo)