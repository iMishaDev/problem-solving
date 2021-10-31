/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
 */

import { LinkedListNode } from '../helpers.js';


class Solution {
    reverse(head){
        let current = head; 
        let prev = null;

        while(current){
            let temp = current.next; 
            current.next = prev; 
            prev = current;
            current = temp;
        }

        return prev;
    }
}
let node = new LinkedListNode(1, new LinkedListNode(2, new LinkedListNode(3, new LinkedListNode(4, new LinkedListNode(5)))))

console.log(new Solution().reverse(node))