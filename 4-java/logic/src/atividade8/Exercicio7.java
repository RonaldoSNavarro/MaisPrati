package atividade8;

//Escreva um programa que leia uma frase e conte o número de palavras nela. Considere que as
//palavras estão separadas por espaços em branco.

import java.util.Scanner;

public class Exercicio7 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String frase;

        System.out.print("Digite uma frase: ");
        frase = scanner.nextLine();

        String[] palavras = frase.split("\\s+");
        int numeroDePalavras = palavras.length;

        System.out.println("A frase digitada contém: " + numeroDePalavras + " palavras");
    }
}
