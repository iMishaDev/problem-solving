import { TreeNode } from './helpers.js'

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

const validBinaryTree = new TreeNode(10,
                    new TreeNode(5, new TreeNode(4,null), new TreeNode(8, null)),
                    new TreeNode(20, new TreeNode(18,null),new TreeNode(24, null)));

const invalidBinaryTree = new TreeNode(10,
                    new TreeNode(5, new TreeNode(4,null), new TreeNode(8, null)),
                    new TreeNode(20, new TreeNode(2,null),new TreeNode(24, null)));


console.log(validBinaryTree)
console.log('is Valid BST: ' ,Solution.isValidBSTRecursive(validBinaryTree))
console.log('is Valid BST: ' ,Solution.isValidBSTRecursive(invalidBinaryTree))