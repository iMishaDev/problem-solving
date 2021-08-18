import { LinkedListNode } from './helpers.js';
class Solution {
    static removeKthFromLinkedList_1(head, k){
        let current = head; 
        let prev = null;
        let size = 0;
        let i = 0;

        while(current){
            size ++;
            current = current.next;
        }

        current = head;
        while(current){
            if(size - i === k){
                let temp = current.next ;
                prev.next = temp;
                current.next = null;
                break;
            }
            prev = current;
            current = current.next;
            i++;
        }
        this.print(head)
    }

    static print(head) {
        let current = head;

        while(current){
            console.log(current.value)
            current = current.next;
        }
    }
}

let head  = new LinkedListNode(1, new LinkedListNode(2, new LinkedListNode(3, new LinkedListNode(4, new LinkedListNode(5, null)))))
console.log(head)
// 12345
head = Solution.removeKthFromLinkedList_1(head, 1)
console.log(head)