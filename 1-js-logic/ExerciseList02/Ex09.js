// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

let clientes = [
    { nome: 'Rafael', idade: 32, cidade: 'Manaus' },
    { nome: 'Fernanda', idade: 28, cidade: 'Belém' },
    { nome: 'Carlos', idade: 45, cidade: 'São Paulo' }
];

let clientesAcimaDe30 = 0;
clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        clientesAcimaDe30++;
    }
});

console.log(`Clientes acima de 30 anos: ${clientesAcimaDe30}`);