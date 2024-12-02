package desafio.contaBancaria;

public class Teste {
    public static void main(String[] args) {
        Usurario usurario1 = new Usurario("João", "000.000.000-00");

        ContaBancaria conta1 = new ContaBancaria("001", usurario1);

        conta1.imprimirDetalhes();

        conta1.depositar(15000);
        conta1.consultarSaldo();
        conta1.imprimirDetalhes();
    }
}
