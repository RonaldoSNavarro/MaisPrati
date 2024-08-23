const prompt = require('prompt-sync')()

// let teste = function() {
//     console.log('Olá, mundo!')
// }

// teste()

// function showFunction(sucessCallback, errorCallback) {
//     if(false) {
//         sucessCallback('Requisição bem sucedida')
//     } else {
//         errorCallback('Erro na requisição')
//     }
// }

// let sucessCallback = function(message) {
//     console.log(message)
// }

// let errorCallback = function(message) {
//     console.error(message)
// }

// showFunction(sucessCallback, errorCallback)

// let nome = " Equipe Olímpica "

// console.log('Ronaldo'.length)
// console.log('Ronaldo'.charAt(0))
// console.log(nome.indexOf('a'))

// //console.log(nome.replace('Ronaldo', 'Nardo'))

// console.log(nome.substr(7, 8))

// console.log(nome.toUpperCase())
// console.log(nome.toLowerCase())
// console.log('-' + nome.trim() + '-')

// Métodos matemáticos

// console.log(Math.ceil(100.73)) // arredonda p/ cima
// console.log(Math.floor(100.73)) // arredonda p/ baixo
// console.log(Math.round(100.73)) // arredonda de forma inteligente, acima de meio arredonda p cima e abaixo de meio arredonda p/ baixo
// console.log(Math.sqrt(100)) // raiz quadrada
// console.log(Math.pow(100, 2)) // potenciação
// console.log(Math.cbrt(100)) // raiz cubica
// console.log(Math.abs(100.20)) // valor absoluto de um número
// console.log(Math.random()) // gera um valor aleatório entre 0 a 1

// Datas

// let date = new Date()

// console.log(date.getDate())

// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())

// date.setDate(date.getDate() + 720)
// console.log(date.toString())

let date1 = new Date(2024, 8, 10)
let date2 = new Date(2023, 8, 10)

console.log(date1.toString())

console.log(date1.getTime())
console.log(date2.getTime())

let miliseconds_between_dates = Math.abs(date1.getTime() - date2.getTime())
console.log(miliseconds_between_dates)

let miliseconds_per_day = (1 * 24 * 60 * 60 * 1000)
console.log('Um dia tem ' + miliseconds_per_day + ' milisegundos')

console.log('A diferença entre as datas é de ' + Math.ceil(miliseconds_between_dates/miliseconds_per_day) + ' dias')

// inverter uma string
// contar vogais
// gerar numero aleatório
// dias entre duas datas
// formatar data