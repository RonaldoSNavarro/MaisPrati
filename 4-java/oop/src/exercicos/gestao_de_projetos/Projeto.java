package exercicos.gestao_de_projetos;

import java.util.ArrayList;
import java.util.List;

public class Projeto {
    private String nome;
    private List<Pessoa> membros = new ArrayList<>();

    public Projeto(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void adicionarMembro (Pessoa pessoa) {
        if (!membros.contains(pessoa)) {
            membros.add(pessoa);
            pessoa.adicionarProjeto(this);
        }
    }

    public void listarMembros() {
        System.out.println("Membros do projeto '" + nome + "':");
        for (Pessoa membro : membros) {
            System.out.println("- "+ membro.getNome());
        }
    }
}
