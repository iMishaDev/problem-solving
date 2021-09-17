import { LinkedListNode } from '../helpers.js'

class Solution {
    static sum(firstNumber, secondNumber){
        let firstNumberCurrent = firstNumber;
        let secondNumberCurrent = secondNumber;
        let resultNode , currentResultNode = null;
        let carry = 0;

        while(firstNumberCurrent || secondNumberCurrent){
            let sum = firstNumberCurrent.value + secondNumberCurrent.value;
            let newNode = new LinkedListNode(( sum % 10 ) + carry);
            carry = Math.floor(sum / 10);

            if (!currentResultNode) { 
                resultNode = currentResultNode = newNode 
            } else {
                currentResultNode.next = newNode;
                currentResultNode = currentResultNode.next;
            } 

            if(firstNumberCurrent.next || secondNumberCurrent.next){
                if(!firstNumberCurrent.next)
                    firstNumberCurrent.next = new LinkedListNode(0);
                
                if(!secondNumberCurrent.next)
                secondNumberCurrent.next = new LinkedListNode(0);
            }
            firstNumberCurrent = firstNumberCurrent.next
            secondNumberCurrent = secondNumberCurrent.next
        }

        return resultNode;
    }
}

let first = new LinkedListNode(1, new LinkedListNode(2, new LinkedListNode(3, new LinkedListNode(4))))
let second = new LinkedListNode(7, new LinkedListNode(7, new LinkedListNode(7)))



console.log('sum two linked lists ', Solution.sum(first, second))

