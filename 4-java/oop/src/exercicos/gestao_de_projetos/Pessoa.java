package exercicos.gestao_de_projetos;

import java.util.ArrayList;
import java.util.List;

public class Pessoa {
    private String nome;
    private List<Projeto> projetos = new ArrayList<>();

    public Pessoa(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public List<Projeto> getProjetos() {
        return projetos;
    }

    public void adicionarProjeto(Projeto projeto) {
        if (!projetos.contains(projeto)) {
            projetos.add(projeto);
            projeto.adicionarMembro(this);
        }
    }
}
