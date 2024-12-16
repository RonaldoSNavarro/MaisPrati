package exercicos.gestao_de_projetos;

public class Main {
    public static void main(String[] args) {
        Pessoa juliana = new Pessoa("Juliana");
        Pessoa ronaldo = new Pessoa("Ronaldo");

        Projeto projeto1 = new Projeto("Desenvolvimento de App");
        Projeto projeto2 = new Projeto("Site Institucional");

        projeto1.adicionarMembro(juliana);
        projeto1.adicionarMembro(ronaldo);

        projeto2.adicionarMembro(juliana);

        projeto1.listarMembros();
        projeto2.listarMembros();

        System.out.println("\nProjetos da Juliana:");
        for (Projeto p : juliana.getProjetos()) {
            System.out.println("- " + p.getNome());
        }

        System.out.println("\nProjetos do Ronaldo:");
        for (Projeto p : ronaldo.getProjetos()) {
            System.out.println("- "+ p.getNome());
        }

    }
}
