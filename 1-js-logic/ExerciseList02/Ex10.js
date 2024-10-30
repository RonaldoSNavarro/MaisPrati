// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

let vendas = [
    { produto: 'Notebook', quantidade: 2, valor: 3000 },
    { produto: 'Mouse', quantidade: 5, valor: 100 },
    { produto: 'Teclado', quantidade: 3, valor: 150 }
];

let totalVendas = 0;
vendas.forEach(venda => {
    totalVendas += venda.quantidade * venda.valor;
});

console.log(`Valor total das vendas: R$${totalVendas}`);