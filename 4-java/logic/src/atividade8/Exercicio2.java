package atividade8;

// Crie um programa que leia uma palavra e verifique se ela é um palíndromo
//(se pode ser lida da mesma forma de trás para frente). Ignore
//diferenças entre maiúsculas e minúsculas.

import java.util.Scanner;

public class Exercicio2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String original;

        System.out.print("Digite uma palavra: ");
        original = scanner.next();
        String invertida = new StringBuilder(original).reverse().toString().toLowerCase();

        if (original.equals(invertida)) {
            System.out.println("A palavra "+ original +" é palíndromo");
        } else {
            System.out.println("A palavra "+ original +" não é palíndromo");
        }
    }
}
