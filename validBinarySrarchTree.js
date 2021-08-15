
class Node {


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
class Solution {
    static isValidBSTRecursive(root){
        return this.#isValidBSTHelper(root, Number.MIN_VALUE, Number.MAX_VALUE);
    }

    static #isValidBSTHelper(root, low, high){
        if (!root) return true;
        return root.value > low
            && root.value < high
            && this.#isValidBSTHelper(root.leftChild, low, root.value)
            && this.#isValidBSTHelper(root.rightChild, root.value, high);
    }
}

const validBinaryTree = new Node(10,
                    new Node(5, new Node(4,null), new Node(8, null)),
                    new Node(20, new Node(18,null),new Node(24, null)));

const invalidBinaryTree = new Node(10,
                    new Node(5, new Node(4,null), new Node(8, null)),
                    new Node(20, new Node(2,null),new Node(24, null)));


console.log(validBinaryTree)
console.log('is Valid BST: ' ,Solution.isValidBSTRecursive(validBinaryTree))
console.log('is Valid BST: ' ,Solution.isValidBSTRecursive(invalidBinaryTree))