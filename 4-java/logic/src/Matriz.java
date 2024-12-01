public class Matriz {
    public static void main(String[] args) {
        int[][] matriz = {
                {10, 20, 30},
                {40, 50, 60},
                {70, 80, 90}
        };

        int principal = 0;
        int secundaria = 0;

        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz.length; j++) {
                if (i == j) {
                    principal += matriz[i][j];
                }
            }
        }

        for (int i = 0; i < matriz.length; i++) {
            int j = matriz.length - 1 - i; // Índice da diagonal secundária
            secundaria += matriz[i][j];
        }

        System.out.println("soma principal: " + principal);
        System.out.println("soma principal: " + secundaria);

// Rotacionando a matriz
        int linhas = matriz.length;
        int colunas = matriz[0].length;

        // Nova matriz com dimensões invertidas
        int[][] matrizRotacionada = new int[colunas][linhas];

        for (int i = 0; i < linhas; i++) {
            for (int j = 0; j < colunas; j++) {
                matrizRotacionada[j][linhas - 1 - i] = matriz[i][j];
            }
        }

        for (int i = 0; i < matrizRotacionada.length; i++) {
            for (int j = 0; j < matrizRotacionada.length; j++){
                System.out.print(matrizRotacionada[i][j]);
            }
            System.out.println();
        }

    }

}
