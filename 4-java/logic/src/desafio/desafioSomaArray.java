package desafio;

public class desafioSomaArray {
    public static void main(String[] args) {
        int[] array = new int[11];

        array[0] = 1;
        array[1] = 2;
        array[2] = 3;
        array[3] = 4;
        array[4] = 5;
        array[5] = 6;
        array[6] = 7;
        array[7] = 8;
        array[8] = 9;
        array[9] = 10;
        array[10] = 11;

//        int soma = 0;
//
//        for (i = 0; i < array.length; i++) {
//            soma += array[i];
//        }
//        System.out.println("A soma do array é: " + soma);

        int[] newArray = new int[array.length + 1];

        for (int j = 0; j < array.length; j++) {
            newArray[j] = array[j];
        }

        newArray[array.length] = 1;

        for (int i = 0; i < newArray.length; i++) {
            System.out.println(newArray[i]);
        }

    }
}


// exercicios
// soma de elementos de um array
// encontrando o valor maximo de um array
// reverter um array