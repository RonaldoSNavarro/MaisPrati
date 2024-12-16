package exercicos.universidade;

import java.util.ArrayList;
import java.util.List;

public class Universidade {
    String nome;
    List<Departamento> departamentos;

    public Universidade(String nome) {
        this.nome = nome;
        this.departamentos = new ArrayList<>();
    }

    public void adicionarDepartamento(Departamento departamento) {
        departamentos.add(departamento);
    }

    @Override
    public String toString() {
        return "Universidade: " + nome + "\nDepartamentos: " + departamentos;
    }
}
