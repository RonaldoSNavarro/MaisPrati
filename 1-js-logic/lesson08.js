const prompt = require('prompt-sync')()

/* const num1 = Number(prompt('Digite o número: '))

if (num1 > 0) {
    console.log('Número positivo!')
} else if (num1 < 0) {
    console.log('Número negativo')
} else if (num1 === 0) {
    console.log('Zero')
} else {
    console.log('Errrrooouuu! digite um número')
} */

// Exercico 2 - ano bissexto

/* const year = Number(prompt('Informe um ano: '))

if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log('O ano é bissexto')
} else {
    console.log('O ano não é bissexto')
} */

// Exercício 3 - Escreva um programa que leia as notas de um aluno e calcule a média

/*
let grade1 = Number(prompt('Informe a primeira nota: '))
let grade2 = Number(prompt('Informe a segunda nota: '))
let grade3 = Number(prompt('Informe a terceira nota: '))

const media = (grade1 + grade2 + grade3)/3
let concept = ''

if (media >= 90) {
    console.log(`A média das notas é ${media.toFixed(2)}`)
} else if (media <= 80) {
    console.log(`A média das notas é ${media.toFixed(2)}`)
} else {
    console.log('É outra nota.')
}

console.log('O conceito do aluno é: ' + concept)
*/

// Exercício 9 - Escreva um programa que leia a idade de uma pessoa e
// e determinar a faixa etária: 0 a 12 = criança, 13 a 21 adolescente...
/*
let age = Number(prompt('Informe a sua idade: '))

let ageRange

if (age >= 0 && age <= 12) {
    ageRange = "Criança"
} else if (age >= 13 && age <= 17) {
    ageRange = 'Adolescente'
} else if (age >= 18 && age <= 60) {
    ageRange = 'Adulto'
} else {
    ageRange = 'Idade inválida'
}

switch(ageRange) {
    case 'Criança':
        console.log('Você é uma criança')
        break
    case 'Adolescente':
        console.log('Você é um adolescente')
        break
    case 'Adulto':
        console.log('Você é um adulto')
        break
    default:
        console.log('Idade inválida!')
}
*/

/* ARRAYS */

let carros = Array()

carros[0] = 'Civic'
carros[1] = 10
carros[2] = true
carros['Ronaldo'] = '10'

let motos = Array('cbr', 'yamaha', 10)
let livros = ['O senhor dos anéis', 'O hobbit', 'Harry Potter']

//livros.push('Sherlock Holmes')
//livros.unshift('1984')
//livros.pop()
livros.splice(2)
console.log(livros)