import { BinaryTreeNode } from './helpers.js';

class Solution {
    static isBalanced(node, height){
        if(!node)
            return height;
        height += 1;
        let leftHeight = this.isBalanced(node.leftChild)
        let rightHeight = this.isBalanced(node.rightChild)

        return leftHeight - rightHeight <= 1 
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