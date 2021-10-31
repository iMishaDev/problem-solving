/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []

*/

import { LinkedListNode } from "../helpers.js";

class Solution {
    merge(lists){

        while(lists.length > 1){
            let list1 = lists.pop();
            let list2 = lists.pop();

            let list3 = this.merge_two_lists(list1, list2)
            lists.push(list3)
        }

        return lists[0];
    }

    merge_two_lists(l1, l2){
        let current1 = l1;
        let current2 = l2;
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

let node1 = new LinkedListNode(1, new LinkedListNode(4, new LinkedListNode(5)))
let node2 = new LinkedListNode(1, new LinkedListNode(3, new LinkedListNode(4)))
let node3 = new LinkedListNode(2, new LinkedListNode(6))

console.log(new Solution().merge([node1, node2, node3]).next.next.next.next)