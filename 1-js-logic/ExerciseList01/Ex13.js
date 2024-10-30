/*
13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

const prompt = require('prompt-sync')();

let somaNumeros = 0;
let contador = 0;
let numeroDecimal = 1;

while (numeroDecimal !== 0) {
    numeroDecimal = parseFloat(prompt("Digite um número decimal | 0 Para sair: "));
    somaNumeros += numeroDecimal;
    contador++;
}

let media = somaNumeros / contador;
console.log(`A média aritmética é: ${media}`);
