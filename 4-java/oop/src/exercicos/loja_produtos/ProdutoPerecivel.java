package exercicos.loja_produtos;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;


public class ProdutoPerecivel extends Produto {
    LocalDate dataDeValidade;

    public ProdutoPerecivel(String nome, Double preco, String dataDeValidade) {
        super(nome, preco);
        this.dataDeValidade = LocalDate.parse(dataDeValidade);
    }

    public LocalDate getDataDeValidade() {
        return dataDeValidade;
    }

    // Sobrescrevendo o método calcularPrecoFinal para aplicar desconto
    @Override
    public double calcularPrecoFinal() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate hoje = LocalDate.now();
        long validade = ChronoUnit.DAYS.between(hoje, dataDeValidade);

        if (validade <= 5){
            return getPreco() * 0.9; // aplica desconto de 10%
        } else {
            return getPreco();
        }

    }

    @Override
    public String toString() {
        return super.toString() + "Produto perecível | Validade: " + dataDeValidade;
    }
}
