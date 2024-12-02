package desafio.contaBancaria;

public class ContaBancaria {
    private String numeroConta;
    private Usurario usurario;
    private double saldo;

    public ContaBancaria(String numeroConta, Usurario usurario) {
        this.numeroConta = numeroConta;
        this.usurario = usurario;
        this.saldo = 0.0;
    }

    public void depositar(double valor) {
        if (valor > 0) {
            this.saldo += valor;
            System.out.println("Depósito de R$ " + valor + " realizado");
        } else {
            System.out.println("Valor inválido! Precisa ser maior do que zero");
        }
    }

    public void sacar(double valor){
        if (valor > 0 && valor <= this.saldo){
            saldo -= valor;
            System.out.println("Saque de R$ " + valor + " realizado");
        } else if (valor > this.saldo) {
            System.out.println("Saldo insuficiente para o saque");
        } else {
            System.out.println("Valor inválido");
        }
    }

    public void consultarSaldo(){
        System.out.println("Saldo atual: R$" + this.saldo);
    }

    public void imprimirDetalhes() {
        System.out.println("Conta número: " + this.numeroConta);
        usurario.imprimirDetalhes();
        consultarSaldo();
    }
}
