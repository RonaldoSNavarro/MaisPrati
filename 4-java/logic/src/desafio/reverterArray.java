package desafio;

import java.util.Arrays;
import java.util.Collections;

public class reverterArray {
    public static void main(String[] args) {
        Integer[] array= {1, 2, 3, 4, 5};

        Collections.reverse(Arrays.asList(array));
        System.out.println(Arrays.toString(array));

    }
}
