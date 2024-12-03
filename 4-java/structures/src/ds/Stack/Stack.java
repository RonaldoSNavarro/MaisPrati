package ds.Stack;

public class Stack<T> {
    Node<T> top;
    int size;

    public Stack() {
        this.top = null;
        this.size = 0;
    }

    public void push(T value) {
        Node<T> newNode = new Node<>(value);
        newNode.next = top;
        top = newNode;

        size++;
    }

    public T pop() {
        if(size == 0) {
            throw new IllegalStateException("A pilha está vazia!");
        }
        T value = top.value;
        top = top.next;
        size--;
        return value;
    }



    public int size() {
        return size;
    }
}
