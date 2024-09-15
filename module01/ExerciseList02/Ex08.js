// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

let filmes = [
    { titulo: 'Matrix', diretor: 'Wachowskis', anoLancamento: 1999 },
    { titulo: 'Inception', diretor: 'Christopher Nolan', anoLancamento: 2010 },
    { titulo: 'Interstellar', diretor: 'Christopher Nolan', anoLancamento: 2014 }
];

let titulos = [];
filmes.forEach(filme => titulos.push(filme.titulo));

console.log(titulos);