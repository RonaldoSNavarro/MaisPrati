//interface Motor {
//    void ligarMotor();
//}
//
//interface Freio {
//    void aplicarFreio();
//}
//
//class Veiculo {
//    String nrChassi;
//}
//
//class Carro implements Motor, Freio {
//    @Override
//    public void aplicarFreio() {
//        System.out.println("Freiando");
//    }
//
//    @Override
//    public void ligarMotor() {
//        System.out.println("Motor ligando");
//    }
//}

//import java.util.ArrayList;
//import java.util.List;
//
//class Estudante {
//    String nome;
//
//    Estudante(String nome) {
//        this.nome = nome;
//    }
//}
//
//class Professor {
//    String nome;
//
//    Professor(String nome) {
//        this.nome = nome;
//    }
//}
//
//class Disciplina {
//    String nome;
//
//    Disciplina(String nome){
//        this.nome = nome;
//    }
//}
//
//class Curso {
//    String nomeCurso;
//    List<Estudante> estudantes;
//
//    Curso(String nomeCurso){
//        this.nomeCurso = nomeCurso;
//        this.estudantes = new ArrayList<>();
//    }
//
//    void adicionarEstudante(Estudante estudante) {
//        estudantes.add(estudante);
//    }
//
//    void listarEstudante() {
//        for (Estudante estudante : estudantes) {
//            System.out.println(estudante.nome);
//        }
//    }
//}
//
//class Sala {
//    String nome;
//
//    public Sala(String nome) {
//        this.nome = nome;
//    }
//}
//
//class Casa {
//    String endereco;
//    List<Sala> salas;
//
//    public Casa(String endereco) {
//        this.endereco = endereco;
//        this.salas = new ArrayList<>();
//    }
//
//    void adicionarSala(String nomeDaSala) {
//        Sala sala = new Sala(nomeDaSala);
//        salas.add(sala);
//    }
//
//    void listarSalas(){
//        for (Sala sala : salas) {
//            System.out.println(sala.nome);
//        }
//    }
//}
//
//class Main {
//    public static void main(String[] args) {
//        Estudante estudante1 = new Estudante("Juliana");
//        Estudante estudante2 = new Estudante("Ronaldo");
//
//        Curso curso = new Curso("Matemática");
//
//        curso.adicionarEstudante(estudante1);
//        curso.adicionarEstudante(estudante2);
//
//        curso.listarEstudante();
//
//        Casa casa = new Casa("Gonçalo de Carvalho");
//        casa.adicionarSala("Sala de estar");
//        casa.adicionarSala("Cozinha");
//
//        casa.listarSalas();
//
//        Professor professor = new Professor("Ayrthon");
//        Disciplina disciplina = new Disciplina("Engenharia Automotiva");
//
//        System.out.println(professor.nome + " ensina " + disciplina.nome);
//    }
//}

class Filtro {
    String tipo;

    public Filtro(String tipo) {
        this.tipo = tipo;
    }
}

class Relatorio {
    void gerar(Filtro filtro){
        System.out.println("Relatório gerado usando o filtro: " + filtro.tipo);
    }
}

class Main {
    public static void main(String[] args) {
        Filtro filtro = new Filtro("Data");
        Relatorio relatorio = new Relatorio();

        relatorio.gerar(filtro);
    }
}
