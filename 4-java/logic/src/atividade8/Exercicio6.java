package atividade8;

// Crie um jogo em que o programa escolhe um número entre 1 e 50, e o/a usuário/a
//deve adivinhar. O programa informa apenas se o palpite está certo ou
//errado. O jogo termina quando o número é adivinhado.


import java.util.Random;
import java.util.Scanner;

public class Exercicio6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        String fimDeJogo = "s";
        int tent = 0, bet, numSecreto = random.nextInt(50);
        String decor = "-=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=-";

        System.out.println("""
                -=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=-
                                    Jogo do número secreto
                -=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=-
                Eu sou Ultron e duvido você adivinhar o número entre 1 e 50 que escolhi
                """);

        while (fimDeJogo == "s"){
            System.out.print("Sua aposta: ");
            bet = scanner.nextInt();
            System.out.println("Processando...");

            try {
                Thread.sleep(3000);
            } catch (InterruptedException e) {
                System.out.println("Processamento interrompido!");
            }

            if (bet == numSecreto) {
                tent ++;
                System.out.println(decor);
                System.out.println("Parabéns, humano! Você acertou com " + tent + " palpites!");
                System.out.println(decor);
                System.out.println("Deseja continuar? (s/n)");
                fimDeJogo = scanner.next().toLowerCase();
            } else if (bet < numSecreto) {
                tent ++;
                System.out.println(decor);
                System.out.println("(Voz do Faustão) Errrrouuuu!! O número que eu escolhi é maior!");
                System.out.println(decor);
            } else if (bet > numSecreto) {
                tent ++;
                System.out.println(decor);
                System.out.println("(Voz do Faustão) Errrrouuuu!! O número que eu escolhi é menor!");
                System.out.println(decor);
            }
        }
        System.out.println(decor);
        System.out.println("Fim de jogo.");
    }
}
