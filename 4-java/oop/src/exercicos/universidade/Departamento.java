package exercicos.universidade;

import java.util.ArrayList;
import java.util.List;

public class Departamento {
    String nome;
    List<Professor> professores;

    public Departamento(String nome) {
        this.nome = nome;
        this.professores = new ArrayList<>();
    }

    public void adicionarProfessor(Professor professor){
        professores.add(professor);
    }

    @Override
    public String toString() {
        return nome + " - Professores: " + professores;
    }
}
