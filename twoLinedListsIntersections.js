import {LinkedListNode } from './helpers.js';
class Solution {
    /**
     * Space Complexity: O(n)
     * Time Complexity: O(n)
     * @param {LinkedListNode} head1 
     * @param {LinkedListNode} head2 
     * @returns {Integer}
     */
    static findIntersectionPoint_1(head1, head2){
        let current1 = head1; 
        let current2 = head2; 

        let reference = new Set();
        while(current1 || current2){

            if(current1.value === current2.value){
                return current1.value
            }

            if(reference.has(current1.value)){
                return current1.value;
            }
            
            if(reference.has(current2.value)){
                return current2.value;
            }
            
            reference.add(current2.value);
            reference.add(current1.value);
            current1 = current1.next;
            current2 = current2.next;
        }
    }
}

let head1  = new LinkedListNode(1, new LinkedListNode(2, new LinkedListNode(3, new LinkedListNode(4, new LinkedListNode(5, null)))))
let head2  = new LinkedListNode(2, new LinkedListNode(6, new LinkedListNode(20, new LinkedListNode(14, null))))

console.log('Find intersection', Solution.findIntersectionPoint_2(head1, head2))