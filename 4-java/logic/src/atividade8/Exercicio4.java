package atividade8;

//  Crie um programa que leia um número inteiro e exiba o número invertido.
//  Exemplo: se o usuário digitar 1234, o programa deve exibir 4321.

import java.util.Scanner;

public class Exercicio4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num;


        System.out.print("Digite um número: ");
        num = scanner.nextInt();
        String convert = String.valueOf(num);
        String invert = new StringBuilder(convert).reverse().toString();

        System.out.println("Número invertido: " + invert);
    }
}
