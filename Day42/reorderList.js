/**
 * You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 */

import { LinkedListNode } from "../helpers.js";

class Solution {
    reorder(list){
        let priority_queue = [];

        while(list){
            priority_queue.push(list)
            list = list.next;
        }
        let new_list = new LinkedListNode(-1);
        let current = new_list;
        while(priority_queue.length > 1){
            current.next = priority_queue.shift()
            current.next.next = priority_queue.pop()
            current = current.next.next;
        }
        if(priority_queue.length){
            current.next = priority_queue.pop()
            current.next.next = null;
        } else {
            current.next = null;
        }
        

        return new_list;
    }
}

let node = new LinkedListNode(1, new LinkedListNode(2, new LinkedListNode(3, new LinkedListNode(4))))
console.log(new Solution().reorder(node).next.next.next)