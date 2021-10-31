/**
 * Given the head of a linked list, 
 * remove the nth node from the end of the list and return its head.


 */

import { LinkedListNode } from "../helpers.js";

class Solution {
    remove(list, k){
        let fast = list;
        let slow = list;
        let prev = null;


        while(k > 0 && fast){
            fast = fast.next;
            k -= 1;
        }

        while(fast){
            prev = slow;
            slow = slow.next;
            fast = fast.next;
        }

        prev.next = slow.next;

        return list;
    }
}
let node = new LinkedListNode(1, new LinkedListNode(5, new LinkedListNode(7, new LinkedListNode(9, new LinkedListNode(15)))))

console.log(new Solution().remove(node, 2))