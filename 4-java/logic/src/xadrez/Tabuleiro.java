package xadrez;

public class Tabuleiro {
    Peca[][] tabuleiro;

    public Tabuleiro() {
        this.tabuleiro = new Peca[8][8];
        iniciarTabuleiro();
    }

    void iniciarTabuleiro() {
        tabuleiro[0][3] = new Rainha("Branca", 0, 3);
        tabuleiro[0][4] = new Rei("Branca", 0, 4);

        tabuleiro[7][3] = new Rainha("Preta", 7, 3);
        tabuleiro[7][4] = new Rei("Preta", 7, 4);
    }

    public void exibirTabuleiro() {
        for (int i = 0; i < 8; i++) { // Percorre as linhas do tabuleiro
            for (int j = 0; j < 8; j++) { // Percorre as colunas do tabuleiro
                if (tabuleiro[i][j] != null) { // verifica se há uma peça na posição
                    System.out.print(tabuleiro[i][j].getCor().charAt(0) + " "); // exibe a cor da peça
                } else {
                    System.out.print(". "); // exibe "." para posições vazias
                }
            }
        }
    }

    public boolean moverPeca(int linhaOrigem, int colunaOrigem, int linhaDestino, int colunaDestino) {
        Peca peca = tabuleiro[linhaOrigem][colunaOrigem];//obtém a peça na posição de origem
        if (peca != null && peca.mover(linhaDestino, colunaDestino)){ // verifica se há peça e se o movimento é válido
            tabuleiro[linhaDestino][colunaDestino] = peca; // move a peça para a posição de destino
            tabuleiro[linhaOrigem][colunaOrigem] = null; // remove a peça da posição de origem
            return true; // movimento realizado com sucesso
        }
        return false; // movimento inválido ou posição inicial vazia
    }
}
