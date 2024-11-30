package desafio;

public class arrayValorMaximo {
    public static void main(String[] args) {
        int[] array = new int[11];
        int maior = 0;

        array[0] = 11;
        array[1] = 2;
        array[2] = 3;
        array[3] = 41;
        array[4] = 50;
        array[5] = 6;
        array[6] = 7;
        array[7] = 85;
        array[8] = 9;
        array[9] = 10;
        array[10] = 1;

        for (int i = 0; i < array.length - 1; i++) {
            if (array[i] > maior){
                maior = array[i];
            }
        }
        System.out.println("O maior elemento é: " + maior);
    }
}
