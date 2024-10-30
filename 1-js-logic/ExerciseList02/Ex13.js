// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

let carrinho = {
    itens: [
        { nome: 'Teclado', quantidade: 1, precoUnitario: 150 },
        { nome: 'Mouse', quantidade: 2, precoUnitario: 50 }
    ]
};

let totalCarrinho = 0;
carrinho.itens.forEach(item => {
    totalCarrinho += item.quantidade * item.precoUnitario;
});

console.log(`Valor total do carrinho: R$${totalCarrinho}`);