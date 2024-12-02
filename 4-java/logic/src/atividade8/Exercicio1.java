package atividade8;

// Escreva um programa que peça dois números e um operador (+, -, *, /). Realize a operação indicada e exiba o resultado.

import java.util.Scanner;

public class Exercicio1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double num1, num2;
        String op;

        System.out.println("Escolha a operação");
        System.out.println("""
                + -> Adição
                - -> Subtração
                * -> Multiplicação
                / -> Divisão
                """);

        op = scanner.next();

        System.out.print("Digite o primeiro número: ");
        num1 = scanner.nextDouble();
        System.out.print("Digite o segundo número: ");
        num2 = scanner.nextDouble();

        switch (op) {
            case "+" : {
                System.out.println("O resultado da adição é: " + (num1 + num2));
            }
            break;
            case "-" : {
                System.out.println("O resultado da subtração é: " + (num1 - num2));
            }
            break;
            case "/" : {
                if (num2 == 0){
                    System.out.println("Erro: Divisão por 0");
                } else {
                    System.out.println("O resultado da divisão é: " + (num1 / num2));
                }
            }
            break;
            case "*" : {
                System.out.println("O resultado da multiplicação é: " + (num1 * num2));
            }
            break;
            default : {
                System.out.println("opção inválida!");
            }
        }
    }
}
