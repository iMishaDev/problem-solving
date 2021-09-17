import { LinkedListNode } from '../helpers.js'

class Solution {
    static reverseLinkedList(head){
        let current = head; 
        let prev = null;
        let temp = null;

        while(current){
            temp = current.next;

            current.next = prev; 

            prev =  current;
            current = temp;

        }
        return prev
    }
}

const linkedList = new LinkedListNode(1, new LinkedListNode(2, new LinkedListNode(3)));
console.log(linkedList)
console.log('ReverseLinked List', Solution.reverseLinkedList(linkedList))