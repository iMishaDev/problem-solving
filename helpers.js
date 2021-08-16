export const createSheet = (array) => {
        const handler = {
            get: function(obj, prop) {
                return prop in obj ?
                obj[prop] :
                0;
            }
            };
        return new Proxy({}, handler);
    }

export class TreeNode {


/**
 * @constructor 
 * @param {number} value 
 * @param {Node} leftChild 
 * @param {Node} rightChild 
 */

    constructor(value, leftChild=null, rightChild=null){
        this.value = value
        this.leftChild = leftChild
        this.rightChild = rightChild
    }
}


export class LinkedListNode {

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