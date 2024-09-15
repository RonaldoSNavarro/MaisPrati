// Manipulação de Arrays de Objetos com for of
// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

let pessoas = [
    { nome: 'João', idade: 25, cidade: 'São Paulo' },
    { nome: 'Maria', idade: 30, cidade: 'Belém' },
    { nome: 'Carlos', idade: 22, cidade: 'Belo Horizonte' }
];

for (let pessoa of pessoas) {
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos e mora em ${pessoa.cidade}`);
}