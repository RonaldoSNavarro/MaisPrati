package exercicos.universidade;

public class Main {
    public static void main(String[] args) {
        Disciplina quimica = new Disciplina("Quimica");
        Professor professor = new Professor("Edith");
        professor.adicionarDisciplina(quimica);

        Departamento exatas = new Departamento("Exatas");
        exatas.adicionarProfessor(professor);

        Universidade maisPraTi = new Universidade("+praTi");
        maisPraTi.adicionarDepartamento(exatas);

        System.out.println(maisPraTi);
    }
}
