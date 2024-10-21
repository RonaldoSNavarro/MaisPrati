let numeros = [1, 2, 3]
let novosNumeros = [...numeros, 4, 5]

console.log(novosNumeros)


// spread com objetos

let pessoa = {nome: "Ronaldo", idade: 37}
let novaPessoa = {...pessoa, cidade: 'Belém'}

console.log(novaPessoa)