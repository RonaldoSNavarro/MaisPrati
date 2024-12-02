package desafio.estoque;

public class Teste {
    public static void main(String[] args) {
        Estoque estoque = new Estoque();

        Produto produto1 = new Produto("Celular", 200, 5);
        Produto produto2 = new Produto("Violão",550, 3);

        estoque.exebirEstoque();

        estoque.adicionarProduto(produto1);
        estoque.adicionarProduto(produto2);

        estoque.exebirEstoque();

        produto1.adicionarEstoque(10);
        produto2.removerEstoque(1);

        System.out.println("Estoque após modificações: ");
        estoque.exebirEstoque();

        Produto produtoConsultado = estoque.consultarProduto("Celular");
        if (produtoConsultado != null) {
            System.out.println("Quantidade de smartphones no estoque: " + produtoConsultado.getQuantidade());
        } else {
            System.out.println("Produto não encontrado");
        }

        estoque.removerProduto("Celular");
        estoque.exebirEstoque();
    }
}
