import { BinaryTreeNode } from '../helpers.js'

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

const validBinaryTree = new BinaryTreeNode(10,
                    new BinaryTreeNode(5, new BinaryTreeNode(4,null), new BinaryTreeNode(8, null)),
                    new BinaryTreeNode(20, new BinaryTreeNode(18,null),new BinaryTreeNode(24, null)));

const invalidBinaryTree = new BinaryTreeNode(10,
                    new BinaryTreeNode(5, new BinaryTreeNode(4,null), new BinaryTreeNode(8, null)),
                    new BinaryTreeNode(20, new BinaryTreeNode(2,null),new BinaryTreeNode(24, null)));


console.log(validBinaryTree)
console.log('is Valid BST: ' ,Solution.isValidBSTRecursive(validBinaryTree))
console.log('is Valid BST: ' ,Solution.isValidBSTRecursive(invalidBinaryTree))