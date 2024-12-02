package atividade8;

// Escreva um programa que receba duas palavras e determine se elas são anagramas (se possuem
//as mesmas letras, mas em ordem diferente). Exemplo: "amor" e "roma".

import java.util.Arrays;
import java.util.Scanner;

public class Exercicio5 {
    public static void main(String[] args) {
        String palavra1;
        String palavra2;

        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite a primeira palavra: ");
        palavra1 = scanner.next();
        System.out.print("Digite a segunda palavra: ");
        palavra2 = scanner.next();

        if (saoAnagramas(palavra1, palavra2)) {
            System.out.println("As palavras são anagramas");
        } else {
            System.out.println("As palavras não são anagramas");
        }
    }

    public static boolean saoAnagramas(String palavra1, String palavra2){
        palavra1 = palavra1.replaceAll("\\s", "").toLowerCase();
        palavra2 = palavra2.replaceAll("\\s", "").toLowerCase();

        if (palavra1.length() != palavra2.length()) {
            return false;
        }

        char[] array1 = palavra1.toCharArray();
        char[] array2 = palavra2.toCharArray();

        Arrays.sort(array1);
        Arrays.sort(array2);

        return Arrays.equals(array1, array2);
    }
}
