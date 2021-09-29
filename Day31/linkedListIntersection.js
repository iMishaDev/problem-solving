/**
Given two singly linked lists that intersect at some point,
find the intersecting node. The lists are non-cyclical.

For example, 
given A = 3 -> 7 -> 8 -> 10
 and B = 99 -> 1 -> -> 4 -> 8 -> 10,


return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.

Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.
 */

import { LinkedListNode } from "../helpers.js"




class Solution {

    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     * @param {LinkedListNode} head1 
     * @param {LinkedListNode} head2 
     * @returns {Integer}
     */
    getIntersect(head1, head2){
        let visited = {};
        let current1 = head1;
        let current2 = head2;

        while(current1 ){
            visited[current1.value] = 1;
            current1 = current1.next;
        }

        while(current2){
            if(visited[current2.value])
                return current2.value;
            current2 = current2.next;
        }
    }
    getSize(l){
            let current = l
            let size = 0;
            while(current){
                size += 1;
                current = current.next;
            }

            return size;
        }

    getIntersect2(head1, head2){
        let size1 = this.getSize(head1);
        let size2 = this.getSize(head2);

        let cu1 = head1;
        let cu2 = head2;

        if(size1 > size2){
            while(size1 > size2){
                cu1 = cu1.next;
                size1 -= 1;
            }
        }else {
            while(size2 > size1){
                cu2 = cu2.next;
                size2 -= 1;
            }
        }

        while(cu1.value !== cu2.value){
            cu1 = cu1.next;
            cu2 = cu2.next;
        }

        return cu1.value;
    }
}


let head1  = new LinkedListNode(3, new LinkedListNode(7,  new LinkedListNode(8,  new LinkedListNode(10))))
let head2  = new LinkedListNode(99, new LinkedListNode(1, new LinkedListNode(8, new LinkedListNode(10))))

console.log(new Solution().getIntersect(head1, head2))
console.log(new Solution().getIntersect2(head1, head2))