// Manipulação de Arrays de Objetos com forEach
// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

let produtos = [
    { nome: 'Camisa', preco: 50, desconto: 0 },
    { nome: 'Calça', preco: 100, desconto: 0 },
    { nome: 'Tênis', preco: 200, desconto: 0 }
];

produtos.forEach(produto => {
    produto.preco = produto.preco * 0.9;
    console.log(`${produto.nome} - Novo Preço: R$${produto.preco}`);
});