import { LinkedListNode } from './helpers.js';

class Solution {
    static rotate(head, numOfRotations){
        let current = head;
        let prev = null;

        while(numOfRotations){

            while(current.next){
                prev = current;
                current = current.next;
            }
            prev.next = null;
            current.next = head;
            head = current;
            numOfRotations -= 1;
        }

        return head;
    }
}

let node = new LinkedListNode(1, new LinkedListNode(2, new LinkedListNode(3, new LinkedListNode(4, new LinkedListNode(5)))))

console.log('rotate linked list', Solution.rotate(node, 2))