/**
Given a singly linked list and an integer k,
remove the kth last element from the list. 
k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.

Do this in constant space and in one pass.
 */

import { LinkedListNode } from "../helpers.js";

class Solution {
    removeKth(head, k){
        let slow = head;
        let  fast = head;
        let prev = null;

        while(k){
            fast = fast.next;
            k -= 1
        }

        while(fast){
            prev = slow;
            slow = slow.next;
            fast = fast.next;
        }

        prev.next = slow.next;
        slow.next = null;

        return head;
    }
}
let node = new LinkedListNode(1, new LinkedListNode(2, new LinkedListNode(5, new LinkedListNode(6, new LinkedListNode(10)))))

console.log(new Solution().removeKth(node, 3))