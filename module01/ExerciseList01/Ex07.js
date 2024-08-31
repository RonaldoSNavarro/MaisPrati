/*
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

const prompt = require('prompt-sync')()

let quantidadeMacas = prompt("Quantidade de maçãs: ");
let preco = quantidadeMacas < 12 ? 0.30 : 0.25;
let valorTotal = quantidadeMacas * preco;

console.log(`Valor total da compra: R$ ${valorTotal.toFixed(2)}`);
