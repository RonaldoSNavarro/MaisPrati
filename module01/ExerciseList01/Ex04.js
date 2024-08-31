/*
Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const prompt = require('prompt-sync')()

console.log("Selecione uma opção: ")
console.log("1 - Verificar se um número é par ou ímpar")
console.log("2 - Classificar a idade em categorias")
console.log("3 - Calcular IMC")
let opcao = prompt()

switch (opcao) {
    case '1':
        let numero = prompt("Digite um número: ");
        if (numero % 2 === 0) {
            console.log(`${numero} é par.`);
        } else {
            console.log(`${numero} é ímpar.`);
        }
        break;

    case '2':
        let idade = prompt("Digite a idade: ");
        if (idade >= 0 && idade <= 12) {
            console.log("Criança");
        } else if (idade >= 13 && idade <= 17) {
            console.log("Adolescente");
        } else if (idade >= 18 && idade <= 59) {
            console.log("Adulto");
        } else if (idade >= 60) {
            console.log("Idoso");
        } else {
            console.log("Idade inválida");
        }
        break;

    case '3':
        let peso = prompt("Digite o peso: ");
        let altura = prompt("Digite a altura: ");
        let imc = peso / (altura * altura);
        if (imc < 18.5) {
            console.log("Baixo peso");
        } else if (imc >= 18.5 && imc < 24.9) {
            console.log("Peso normal");
        } else if (imc >= 25 && imc < 29.9) {
            console.log("Sobrepeso");
        } else {
            console.log("Obesidade");
        }
        break;

    default:
        console.log("Opção inválida.");
        break;
}
