
class Node {
    int data;
    Node left, right;

    Node(int data) {
        this.data = data;
    }
}

public class AVLTree {

    // Height of a node
    static int height(Node root) {
        if (root == null)
            return 0;

        return 1 + Math.max(height(root.left),
                            height(root.right));
    }

    
    static int balance(Node root) {
        if (root == null)
            return 0;

        return height(root.left) - height(root.right);
    }
    public static void preOrder(Node node) {
        if (node != null) {
            System.out.print(node.data + " ");
            preOrder(node.left);
            preOrder(node.right);
        }
    }

    public static void main(String[] args) {
        Node root = new Node(10);
        root.left = new Node(20);
        root.right = new Node(30);

        System.out.println("Height: " + height(root));
        System.out.println("Balance Factor: " + balance(root));
    }
    public  static inorder(Node node) {
        if (node != null) {
            inorder(node.left);
            System.out.print(node.data + " ");
            inorder(node.right);
        }
    }
}
