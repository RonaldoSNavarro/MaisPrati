// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

let pedidos = [
    { cliente: 'Ana', produto: 'Notebook', quantidade: 1 },
    { cliente: 'Ana', produto: 'Mouse', quantidade: 2 },
    { cliente: 'João', produto: 'Teclado', quantidade: 1 }
];

let produtosPorCliente = {};
pedidos.forEach(pedido => {
    if (!produtosPorCliente[pedido.cliente]) {
        produtosPorCliente[pedido.cliente] = 0;
    }
    produtosPorCliente[pedido.cliente] += pedido.quantidade;
});

console.log(produtosPorCliente);