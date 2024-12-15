package exercicos.loja_produtos;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Produto produto1 = new Produto("Caderno", 50.0);
        Produto produto2 = new ProdutoPerecivel("Picanha", 100.0, "2024-12-20");
        Produto produto3 = new ProdutoEletronico("Teclado", 200.0, 12);

        // criando lista de produtos
        List<Produto> produtos = new ArrayList<>();
        produtos.add(produto1);
        produtos.add(produto2);
        produtos.add(produto3);

        for (Produto produto : produtos) {
            System.out.println(produto.getNome()
                    + " | Preço Original: " + produto.getPreco()
                    + " | Preço Final: " + produto.calcularPrecoFinal());
        }
    }
}
