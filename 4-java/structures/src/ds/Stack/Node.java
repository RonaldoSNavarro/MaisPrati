package ds.Stack;

public class Node<T> {
    T value;
    ds.Stack.Node<T> next;

    public Node(T value) {
        this.value = value;
        this.next = null;
    }
}
