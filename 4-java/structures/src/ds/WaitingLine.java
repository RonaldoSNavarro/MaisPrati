package ds;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class WaitingLine {
    public static void main(String[] args) {
        Queue<String> linkedListQueue = new LinkedList<>();
        linkedListQueue.add("Ana");
        linkedListQueue.add("Pedro");
        linkedListQueue.add("Maria");
        linkedListQueue.add("João");

        System.out.println("Próximo(a) a ser atendido(a) --> " + linkedListQueue.peek());
        linkedListQueue.remove(linkedListQueue.peek());
        System.out.print("""
                --------------------------------------------------------------
                                      Fila atualizada
                --------------------------------------------------------------
                """);
        linkedListQueue.forEach(System.out::println);

        Scanner scanner = new Scanner(System.in);
        String nome = "";
        int op = 0;

        while (op != 3) {

            if (linkedListQueue.isEmpty()) {
                System.out.println("A fila está vazia!");
                break;
            } else {
                System.out.println("""
                    --------------------------------------------------------------
                    Deseja inserir novos nomes ou remover o próximo a ser atendido?
                    1 - Adicionar
                    2 - Remover
                    3 - Sair
                    --------------------------------------------------------------
                    """);
                op = scanner.nextInt();
                switch (op) {
                    case 1:
                        System.out.print("Digite o nome: ");
                        scanner.nextLine();
                        nome = scanner.nextLine();
                        linkedListQueue.add(nome);
                        System.out.println("--- Adicionado com sucesso! ---");
                        linkedListQueue.forEach(System.out::println);
                        break;

                    case 2:

                        linkedListQueue.remove(linkedListQueue.peek());
                        System.out.println("--- Removido com sucesso! ---");
                        linkedListQueue.forEach(System.out::println);
                        break;

                    case 3:
                        break;

                    default:
                        System.out.println("Opção inválida.");
                }
            }
        }
    }
}
