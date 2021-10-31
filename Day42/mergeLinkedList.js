/**
 * Merge two sorted linked lists and return it as a sorted list. 
 * The list should be made by splicing together the nodes of the first two lists.


 */

import { LinkedListNode } from "../helpers.js";


class Solution {
    merge(head1, head2){
        let current1 = head1;
        let current2 = head2;
        let list = new LinkedListNode(-1);
        let current_list = list;
        while(current1 && current2){
            if(current1.value < current2.value){
                current_list.next = current1;
                current1 = current1.next;

            } else {
                current_list.next = current2;
                current2 = current2.next;
            }
            current_list = current_list.next;

        }

        while(current1){
            current_list.next = current1;
            current1 = current1.next;
            current_list = current_list.next;
        }

        while(current2){
            current_list.next = current2;
            current2 = current2.next;
            current_list = current_list.next;
        }

        return list.next;
    }
}

let node1 = new LinkedListNode(1, new LinkedListNode(5, new LinkedListNode(7, new LinkedListNode(9, new LinkedListNode(15)))))


let node2 = new LinkedListNode(2, new LinkedListNode(4, new LinkedListNode(8, new LinkedListNode(12, new LinkedListNode(14)))))


console.log(new Solution().merge(node1, node2))