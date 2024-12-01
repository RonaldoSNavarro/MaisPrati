package desafio;

public class desafioExcluiItemArray {
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


        int countRemoção = 0;

        for (int i = 0; i < array.length; i++) {
            if (array[1] != 10) {
                countRemoção++;
            }
        }

        int[] newArrayRemocao = new int[countRemoção];
        
        int index = 0;

        for (int i = 0; i < newArrayRemocao.length; i++) {
            if (array[i] !=10) {
                newArrayRemocao[index] = array[i];
                index++;
            }
        }

        System.out.println("Array após a remoção: ");
        for (int i = 0; i < newArrayRemocao.length; i++) {
            System.out.println(newArrayRemocao[i]);
        }
    }
}
