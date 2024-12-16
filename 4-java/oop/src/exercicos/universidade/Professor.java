package exercicos.universidade;

import java.util.ArrayList;
import java.util.List;

public class Professor {
    String nome;
    List<Disciplina> disciplinas;

    public Professor(String nome) {
        this.nome = nome;
        this.disciplinas = new ArrayList<>();
    }

    public void adicionarDisciplina(Disciplina disciplina) {
        disciplinas.add(disciplina);
    }

    @Override
    public String toString() {
        return nome + " - Disciplinas: " + disciplinas;
    }
}
