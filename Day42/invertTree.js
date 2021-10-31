/**
 * Given the root of a binary tree, invert the tree, and return its root.


 */

import { BinaryTreeNode } from "../helpers.js";

class Solution {
    invert(node){
        if( !node)
            return null;
        
        [node.rightChild, node.leftChild] = [node.leftChild, node.rightChild];
        this.invert(node.rightChild)
        this.invert(node.leftChild)

        return node;
    }
}

const tree1 = new BinaryTreeNode(1,
                    new BinaryTreeNode(4, 
                        new BinaryTreeNode(3,null),
                        new BinaryTreeNode(2, null)),
                    new BinaryTreeNode(5, 
                        new BinaryTreeNode(4,null),
                        new BinaryTreeNode(1, null)));

console.log(new Solution().invert(tree1))