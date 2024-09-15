// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

let estoque = [
    { produto: 'Teclado', quantidade: 5, minimo: 10 },
    { produto: 'Mouse', quantidade: 15, minimo: 10 },
    { produto: 'Monitor', quantidade: 7, minimo: 8 }
];

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2;
    }
});

console.log(estoque);