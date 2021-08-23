import { TreeNode } from './helpers.js';

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

const tree1 = new TreeNode(0,
                    new TreeNode(1, null),
                    new TreeNode(0, 
                        new TreeNode(0,null),
                        new TreeNode(1, null)));

const tree2 = new TreeNode(0,
                    new TreeNode(1, 
                        new TreeNode(0,
                            new TreeNode(1, null)),
                            null),
                            null);
console.log('is balanced tree', Solution.isBalanced(tree1))
console.log('is balanced tree', Solution.isBalanced(tree2))