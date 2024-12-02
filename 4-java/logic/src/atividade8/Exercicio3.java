package atividade8;

//Implemente um programa que calcule e exiba os primeiros n números da sequência de Fibonacci. n deve ser fornecido
// pelo/a usuário/a.

import java.util.Scanner;

public class Exercicio3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n, t1 = 0, t2 = 1, c = 3;

        System.out.print("Quantos elementos da sequência Fibonacci deseja visualizar? ");
        n = scanner.nextInt();

        System.out.print(t1 + " -> " + t2);

        while (c <= n) {
            int t3 = t1 + t2;
            System.out.print(" -> " + t3);
            t1 = t2;
            t2 = t3;
            c++;
        }
        System.out.println(" -> Fim.");
    }
}
