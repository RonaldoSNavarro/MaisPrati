// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

let livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    anoPublicacao: 1954,
    genero: 'Fantasia'
};

let hasEditora = false;
for (let prop in livro) {
    if (prop === 'editora') {
        hasEditora = true;
        break;
    }
}

if (!hasEditora) {
    livro.editora = 'HarperCollins';
}

console.table(livro);