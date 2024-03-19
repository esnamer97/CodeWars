import java.io.*;
import java.util.*;

class Node {
    int data;
    Node next;

    public Node (int data){
        this.data = data;
        this.next = null;
    }
}

public class Linked_List_that_is_Sorted_Alternatingly {
    static void printList(Node node)
    {
        while (node != null)
        {
            System.out.print(node.data + " ");
            node = node.next;
        }
        System.out.println();
    }
    public static void main (String[] args) {
        Scanner sc  = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-- > 0){
            int n = sc.nextInt();

            Node head = new Node(sc.nextInt());
            Node tail = head;

            for(int i=1; i<n; i++){
                tail.next = new Node(sc.nextInt());
                tail = tail.next;
            }
            Solution obj = new Solution();
            head = obj.sort(head);
            printList(head);
        }
    }
}

class Solution {

    public Node sort(Node head){

        Node asc = new Node(0);
        Node des = new Node(0);

        splitLists(asc, des, head);
        des = orderAsc(des.next);

        return mergeList(asc.next, des);
    }

    private Node mergeList(Node asc, Node des) {
        if (asc == null) return des;
        if (des == null) return asc;

        Node head = new Node(0);
        Node temp = head;

        while (asc != null && des != null){
            if (asc.data <= des.data){
                temp.next = asc;
                asc = asc.next;
            }else {
                temp.next = des;
                des = des.next;
            }
            temp = temp.next;
        }
        temp.next = asc != null ? asc : des;
        return head.next;
    }

    private Node orderAsc(Node des) {
        Node curr = des;
        Node prev = null;
        Node next;
        while(curr != null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        des = prev;
        return des;
    }

    private void splitLists(Node asc, Node des, Node head) {
        Node curr = head;
        Node tAsc = asc;
        Node tDes = des;

        while (curr != null){
            tAsc.next = curr;
            tAsc = tAsc.next;
            curr = curr.next;
            if (curr != null){
                tDes.next = curr;
                tDes = tDes.next;
                curr = curr.next;
            }
        }
        tAsc.next = null;
        tDes.next = null;
    }

}