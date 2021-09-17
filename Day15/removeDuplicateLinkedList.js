import { LinkedListNode } from '../helpers.js';

class Solution {

/**
 * assuming it's not sorted
 * Time Complexity: O(N)
 * Space Complexity : O(N)
 * @param {LinkedListNode} head 
 * @returns {LinkedListNode}
 */
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

/**
 * assuming it's sorted
 * Time Complexity: O(N)
 * Space Complexity : O(1)
 * @param {LinkedListNode} head 
 * @returns {LinkedListNode}
 */
    static removeDuplicate_2(head){
        let current = head; 

        while(current && current.next){
            if(current.value == current.next.value){
                current.next = current.next.next;
            } else 
                current = current.next;
        }
        return head;
    }
}
let node = new LinkedListNode(1, new LinkedListNode(2, new LinkedListNode(2, new LinkedListNode(2, new LinkedListNode(5)))))

console.log('Remove Duplicates from LinkedList',Solution.removeDuplicate_2(node))