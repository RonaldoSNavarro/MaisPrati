// Arrays/vetores multidimensionais

const prompt = require('prompt-sync')()

// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// // console.table(matriz)

// // console.log(matriz[1][1])

// for(let i = 0; i < matriz.length; i++) {
//     for(let j = 0; j < matriz[i].length; j++) {
//         console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`)
//     }
// }


let arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let arr2 = [
    [9,8,7],
    [6,5,4],
    [3,2,1]
]

let resultado = []

if(arr1.length !== arr2.length || arr1[0].length !== arr2[0].length) {
    throw new Error("Os arrays devem ter o mesmo tamanho.")
}

for(let i = 0; i < arr1.length; i++) {
    let somaLinha = []
    for(let j = 0; j < arr1[i].length; j++) {
        somaLinha.push(arr1[i][j] + arr2[i][j])
    }

    resultado.push(somaLinha)
}

console.table(resultado)