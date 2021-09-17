import { LinkedListNode} from '../helpers.js';

class Solution {
    static swap(head){
        let current = head;
        while(current.next){
            [current.value, current.next.value] = [current.next.value, current.value];
            current = current.next.next;
        }

        return head;
    }
}
let node = new LinkedListNode(1, new LinkedListNode(2, new LinkedListNode(3, new LinkedListNode(4,new LinkedListNode(5) ))))

console.log(Solution.swap(node))