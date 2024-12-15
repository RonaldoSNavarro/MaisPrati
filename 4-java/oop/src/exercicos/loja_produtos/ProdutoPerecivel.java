package exercicos.loja_produtos;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;


public class ProdutoPerecivel extends Produto {
    private String dataDeValidade;

    public ProdutoPerecivel(String nome, Double preco, String dataDeValidade) {
        super(nome, preco);
        this.dataDeValidade = dataDeValidade;
    }

    public String getDataDeValidade() {
        return dataDeValidade;
    }

    // Sobrescrevendo o método calcularPrecoFinal para aplicar desconto
    @Override
    public double calcularPrecoFinal() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate validade = LocalDate.parse(dataDeValidade, formatter);
        LocalDate hoje = LocalDate.now();

        if (validade.isBefore(hoje.plusDays(30))){
            return getPreco() * 0.9; // aplica desconto de 10%
        } else {
            return getPreco();
        }

    }

    @Override
    public String toString() {
        return super.toString() + " | Validade: " + dataDeValidade;
    }
}
