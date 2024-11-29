import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);
//        int numero;
//
//        System.out.print("Digite um número: ");
//        numero = scanner.nextInt();
//
//        if (numero % 2 == 0) {
//            System.out.println("O número é par");
//        } else {
//            System.out.println("O número é ímpar");
//        }

// Dia da semana

//        int dia;
//
//        System.out.print("Digite um número entre 1 e 7: ");
//        dia = scanner.nextInt();
//
//        switch (dia) {
//            case 1 : {
//                System.out.println("É domingo!");
//            }
//            break;
//            case 2 : {
//                System.out.println("É segunda!");
//            }
//            break;
//            case 3 : {
//                System.out.println("É terça!");
//            }
//            break;
//            case 4 : {
//                System.out.println("É quarta!");
//            }
//            break;
//            case 5 : {
//                System.out.println("É quinta!");
//            }
//            break;
//            case 6 : {
//                System.out.println("Sexxxou!");
//            }
//            break;
//            case 7 : {
//                System.out.println("É sábado!");
//            }
//            break;
//        }


// Ano bisexto

//    int ano;
//
//        System.out.print("Digite o ano: ");
//        ano = scanner.nextInt();
//
//        if (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)) {
//            System.out.println("O ano é bisexto!");
//        } else {
//            System.out.println("O ano não é bisexto");
//        }
//
//

        // Calculadora

//        double num1, num2;
//        int op;
//
//        System.out.println("Escolha a operação");
//        System.out.println("1 = Adição");
//        System.out.println("2 = Subtração");
//        System.out.println("3 = Divisão");
//        System.out.println("4 = Multiplicação");
//
//        op = scanner.nextInt();
//
//        System.out.print("Digite o primeiro número: ");
//        num1 = scanner.nextDouble();
//        System.out.print("Digite o segundo número: ");
//        num2 = scanner.nextDouble();
//
//        switch (op) {
//            case 1 : {
//                System.out.println("O resultado da adição é: " + (num1 + num2));
//            }
//            break;
//            case 2 : {
//                System.out.println("O resultado da subtração é: " + (num1 - num2));
//            }
//            break;
//            case 3 : {
//                if (num2 == 0){
//                    System.out.println("Erro: Divisão por 0");
//                } else {
//                    System.out.println("O resultado da divisão é: " + (num1 / num2));
//                }
//            }
//            break;
//            case 4 : {
//                System.out.println("O resultado da multiplicação é: " + (num1 * num2));
//            }
//            break;
//            default : {
//                System.out.println("opção inválida!");
//            }
//        }


// Login

//        String senha = "123456";
//        String senha2;
//        int cont = 3;
//
//        while (cont <= 3 && cont > 0) {
//            System.out.print("Digite a senha: ");
//            senha2 = scanner.next();
//            if (senha2.equals(senha)) {
//                System.out.println("Usuário logado!");
//                break;
//            } else {
//                cont--;
//                System.out.println("Senha incorreta. Tentativas restantes: " + cont);
//
//            }
//        }

// Manipulando strings

//        String texto = "Java é uma excelente linguagem de programação";
//
//        int comprimento = texto.length();
//
//        System.out.println("Comprimento da string: " + comprimento);
//
//        String maiusculas = texto.toUpperCase();
//        System.out.println(maiusculas);
//        String minusculas = texto.toLowerCase();
//        System.out.println(minusculas);
//
//        boolean contem = texto.contains("Java");
//        System.out.println(contem);
//
//        String substituto = texto.replace("Java", "Python");
//        System.out.println(substituto);
//
//        String substring = texto.substring(0, 4);
//        System.out.println(substring);
//
//        double num = 20.60;
//        double arredondado = Math.round(num);
//        System.out.println(arredondado);
//        Math.ceil(arredondado);
//        Math.floor(arredondado);
//        Math.sqrt(arredondado);
//        Math.abs(arredondado);
//        Math.random();


// Declarando arrays

        int[] vetor = new int[5];


        vetor[0] = 1;
        vetor[1] = 2;
        vetor[2] = 3;
        vetor[3] = 4;
        vetor[4] = 5;

        int maior = vetor[0];

        for (int j = 0; j < vetor.length; j++) {
            System.out.println("Elemento na posição: " + j + ": " + vetor[j]) ;
        }

// valor máximo em um array

        for (int j = 0; j < vetor.length; j++) {
            if (vetor[j] > maior) {
                maior = vetor[j];
            }
        }
        System.out.println("Maior elemento: " + maior);


    }
}