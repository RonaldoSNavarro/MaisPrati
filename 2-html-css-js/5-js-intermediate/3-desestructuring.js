/* Desestruturação */


let numeros = [10, 20, 41]

const [primeiro, segundo, terceiro] =  numeros

console.log(primeiro)
console.log(segundo)
console.log(terceiro)


let pessoa = {
    nome: 'Ronaldo',
    idade: 37,
    profissao: 'Desenvolvedor'
}

const {nome, idade, profissao} = pessoa

console.log(nome)
console.log(idade)
console.log(profissao)

const {nome: nomePessoa, idade: anos, cidade = 'Belém'} = pessoa

console.log(nomePessoa)
console.log(anos)
console.log(cidade)