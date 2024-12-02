package desafio.contaBancaria;

public class Usurario {
    private String nome;
    private String cpf;

    public Usurario(String nome, String cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    public void imprimirDetalhes() {
        System.out.println("Usuário: " + nome + ", CPF: " + cpf);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
}
