import { LinkedListNode } from './helpers.js';
class Solution {

    


    static mergeKLinkedLists(lists){
        let newList = new LinkedListNode(-1);
        let newHead = newList;
        let min = Number.MAX_VALUE;
        let index = -1;
        let filteredList = lists;

        while (filteredList.length){

            filteredList = filteredList.filter((el) => el !== null );
            min = Number.MAX_VALUE;

            if (!filteredList.length) break;

            [min , index] = filteredList.map((el, index) => [el.value, index]).sort((a, b)=> a[0] - b[0])[0]
            
            newList.next = filteredList[index];
            filteredList[index] = filteredList[index].next;
            newList = newList.next;
        }
        return newHead.next;
    }

    static print(head) {
        let current = head;
        while(current){
            console.log(current.value)
            current = current.next;
        }
    }
}

let head1  = new LinkedListNode(1, new LinkedListNode(3, new LinkedListNode(5, null)))
let head2  = new LinkedListNode(2, new LinkedListNode(4, new LinkedListNode(6, null)))


// 12345

console.log('Merging two LinkedLists ',  Solution.print(Solution.mergeKLinkedLists([head1, head2])))
