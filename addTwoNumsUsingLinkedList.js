class Node {

/**
 * @constructor 
 * @param {number} value 
 * @param {object} prevNode 
 * @param {object} nextNode 
 */

    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}
class Solution {
    static sum(firstNumber, secondNumber){
        let firstNumberCurrent = firstNumber;
        let secondNumberCurrent = secondNumber;
        let resultNode , currentResultNode = null;
        let carry = 0;

        while(firstNumberCurrent || secondNumberCurrent){
            let sum = firstNumberCurrent.value + secondNumberCurrent.value;
            let newNode = new Node(( sum % 10 ) + carry);
            carry = Math.floor(sum / 10);

            if (!currentResultNode) { 
                resultNode = currentResultNode = newNode 
            } else {
                currentResultNode.next = newNode;
                currentResultNode = currentResultNode.next;
            } 

            if(firstNumberCurrent.next || secondNumberCurrent.next){
                if(!firstNumberCurrent.next)
                    firstNumberCurrent.next = new Node(0);
                
                if(!secondNumberCurrent.next)
                secondNumberCurrent.next = new Node(0);
            }
            firstNumberCurrent = firstNumberCurrent.next
            secondNumberCurrent = secondNumberCurrent.next
        }

        return resultNode;
    }
}

let first = new Node(1, new Node(2, new Node(3, new Node(4))))
let second = new Node(7, new Node(7, new Node(7)))



console.log('sum two linked lists ', Solution.sum(first, second))

