/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can
 be reached again by continuously following the next pointer. Internally, 
 pos is used to denote the index of the node that tail's next pointer is connected to. 
 Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
 */

import { LinkedListNode } from "../helpers.js";

class Solution {

    contains_cycle(head){
        let fast = head;
        let slow = head;
        while(fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;
            if(fast == slow)
                return true;
        }

        return false;
    }
}

let f_node = new LinkedListNode(3);
f_node.next = new LinkedListNode(2);
f_node.next.next =  new LinkedListNode(0);
f_node.next.next.next = new LinkedListNode(-4);
f_node.next.next.next.next = f_node.next;
let node = new LinkedListNode(1, new LinkedListNode(2, new LinkedListNode(3, new LinkedListNode(4, new LinkedListNode(5)))))


console.log(new Solution().contains_cycle(f_node))
console.log(new Solution().contains_cycle(node))