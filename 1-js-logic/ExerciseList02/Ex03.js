// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

let produto = {
    nome: 'Teclado',
    preco: 150,
    estoque: 20,
    peso: 0.8
};

function filtrarPropriedades(obj, valorMinimo) {
    let resultado = {};
    for (let prop in obj) {
        if (obj[prop] > valorMinimo) {
            resultado[prop] = obj[prop];
        }
    }
    return resultado;
}

console.log(filtrarPropriedades(produto, 50));