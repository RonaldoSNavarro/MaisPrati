const prompt = require('prompt-sync')()
/*
let multiplier = Number(prompt('Deseja saber a tabuada de qual número? '))

for (let counter = 0; counter <= 10; counter++) {
    console.log(`${multiplier} * ${counter} = `, multiplier * counter)
}
*/


/*Imprimir os valores pares entre 1 e 20
for(let i = 0; i <= 20; i += 2) {
    console.log(i)
}*/

/* Calcular a soma dos números de 1 a 100
let soma = 0
for(let i = 0; i <= 100; i++) {
    soma += i
}
console.log(soma)

 Imprima os valores de 1 até 10 em ordem decrescente

for(let i = 10; i >= 1; i--) {
    console.log(i)
}
*/

/*let i = 10
while(i > 0){
    console.log(i)
    i--
}*/

/* Calcular a soma dos números de 1 a 100.

let soma = 0
let i = 1
while(i <=100){
    soma += i
    console.log(soma)
    i++
}
*/

/* Fazer um algoritmo para receber números decimais até que o usuário digite 0 e
fazer a média artimética desses números.

let sum = 0
let cont = 0
let numero = Number(prompt("Digite um número. digite 0 para sair e calcular a média: "))

while(numero != 0) {
    sum += numero
    cont ++
    numero = Number(prompt("Digite outro número. digite 0 para sair e calcular a média: "))
    
}
console.log(sum/cont)
*/

// Escreva um algoritmo para imprimir os 50 primeiros números primos maiores que 100.
//Obs.: Número primo é aquele divisível somente por 1 e por ele mesmo.

// Solicitar números do usuário ate que ele insira um número negativo

let num

do {
    num = Number(prompt("Digite um número: "))
} while(num >= 0)