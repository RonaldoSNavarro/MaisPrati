// Exercício proposto em aula

// Você está desenvolvendo uma aplicação de e-commerce que precisa exibir uma lista de produtos disponíveis em estoque.
// O objetivo deste exercício é implementar a renderização condicional para exibir apensa os produtos que estão disponíveis (ou seja, aqueles que possuem propriedade inStock como true).

// Desafio extra (opcional):

// Adicione um botão que permita alternar entre todos os produtos e apenas os produtos em estoque.

import { useState } from "react";

function ProductList() {
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const products = [
    { id: 1, name: "Produto A", inStock: true },
    { id: 2, name: "Produto B", inStock: false },
    { id: 3, name: "Produto C", inStock: true },
    { id: 4, name: "Produto D", inStock: false },
  ];

  const filteredProducts = showInStockOnly
    ? products.filter((product) => product.inStock)
    : products;

  return (
    <div>
      <button onClick={() => setShowInStockOnly(!showInStockOnly)}>
        {showInStockOnly
          ? "Mostrar Todos os Produtos"
          : "Mostrar Apenas em Estoque"}
      </button>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name}{" "}
            {product.inStock ? "(Em Estoque)" : "(Fora de Estoque)"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;