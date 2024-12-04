package ds;

//Filtro de Plavras: Um programa que leia uma frase do usuário e armazene cada palavra em um ArrayList
//Remova todas as palavras com menos de 4 caracteres e exiba a lista


import java.util.ArrayList;
import java.util.Scanner;

public class WordsFilter {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        String frase;
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite uma frase: ");
        frase = scanner.nextLine();

        for (String palavra : frase.split(" ")) {
            list.add(palavra);
        }

        list.removeIf(palavra -> palavra.length() < 4);

        System.out.println("Palavras com 4 ou mais caracteres: " + list);

    }
}
