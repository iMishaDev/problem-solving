import { LinkedListNode } from './helpers.js';

class Solution {
    static removeDuplicate(head){
        let sheet = {};
        let current = head; 
        let prev = null;

        while(current){
            if(sheet[current.value]){
                prev.next = current.next;
            } else {
                sheet[current.value] = 1;
                prev = current;
            }

            current = current.next;
        }

        return head;
    }
}
let node = new LinkedListNode(1, new LinkedListNode(2, new LinkedListNode(2, new LinkedListNode(2, new LinkedListNode(5)))))

console.log('Remove Duplicates from LinkedList',Solution.removeDuplicate(node))