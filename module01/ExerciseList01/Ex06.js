/*
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
*/

const prompt = require('prompt-sync')()

let ladoA = prompt("Informe o lado A: ");
let ladoB = prompt("Informe o lado B: ");
let ladoC = prompt("Informe o lado C: ");

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Triângulo Equilátero");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
} else {
    console.log("Os valores fornecidos não formam um triângulo.");
}
