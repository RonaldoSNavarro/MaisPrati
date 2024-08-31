/*
12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.
*/

const prompt = require('prompt-sync')();

let numeroTabuada = parseInt(prompt("Deseja calcular a tabuada de qual número? "));

for (let i = 1; i <= 10; i++) {
    console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
}