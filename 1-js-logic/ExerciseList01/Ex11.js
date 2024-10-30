/*
11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.
*/


const prompt = require('prompt-sync')();

let soma = 0;

for (let i = 1; i < 6; i++) {
    let numero = parseFloat(prompt(`Informe o número ${i}: `));
    soma += numero;
}

console.log(`A soma total é: ${soma}`);