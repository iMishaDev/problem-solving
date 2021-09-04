import { BinaryTreeNode } from './helpers.js';

class Solution {
    static isBalanced(node){
        return this.isBalancedHelper(node, 0) !== -1
    }

    static isBalancedHelper(node){
        if(!node)
            return 0;

        let leftHeight = this.isBalancedHelper(node.leftChild)
        let rightHeight = this.isBalancedHelper(node.rightChild)

        if(leftHeight >= 0 && rightHeight >= 0 && Math.abs(leftHeight - rightHeight) <= 1)
            return Math.max(leftHeight, rightHeight) + 1
        return -1;
    }
}

const tree1 = new BinaryTreeNode(0,
                    new BinaryTreeNode(1, null),
                    new BinaryTreeNode(0, 
                        new BinaryTreeNode(0,null),
                        new BinaryTreeNode(1, null)));

const tree2 = new BinaryTreeNode(0,
                    new BinaryTreeNode(1, 
                        new BinaryTreeNode(0,
                            new BinaryTreeNode(1, null)),
                            null),
                            null);
console.log('is balanced tree', Solution.isBalanced(tree1))
console.log('is balanced tree', Solution.isBalanced(tree2))