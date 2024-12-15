package exercicos.loja_produtos;

public class ProdutoEletronico extends Produto {
    private int garantiaEmMeses;

    public ProdutoEletronico(String nome, Double preco, int garantiaEmMeses) {
        super(nome, preco);
        this.garantiaEmMeses = garantiaEmMeses;
    }

    public int getGarantiaEmMeses() {
        return garantiaEmMeses;
    }

    // Sobrescrevendo o método calcularPrecoFinal para aplicar taxa de garantia
    @Override
    public double calcularPrecoFinal() {
        return getPreco() * 1.05; // aplica taxa de garantia de 5%
    }

    @Override
    public String toString() {
        return super.toString() + " | Garantia: " + garantiaEmMeses + " meses";
    }
}
