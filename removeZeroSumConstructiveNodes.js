import { LinkedListNode } from './helpers.js'
class Solution {
    static removeZeroSum(head){
        let current = head; 
        let sumSheet = {};
        let sum = 0;
        let prev = null;

        while(current){
            sum += current.value;

            if(sumSheet[sum]){
                prev = sumSheet[sum];
                prev.next = current.next;
            }
            else sumSheet[sum] = current;

            current = current.next;
        }
        return head;
    }
}

let head  = new LinkedListNode(3, new LinkedListNode(1, new LinkedListNode(2, new LinkedListNode(-2, new LinkedListNode(-1, new LinkedListNode(4, new LinkedListNode(1, null)))))))
console.log(head)
head = Solution.removeZeroSum(head)
console.log(head)