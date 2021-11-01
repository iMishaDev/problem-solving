/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).


 */

import { BinaryTreeNode } from "../helpers.js";

class Solution {
    is_valid(root, low, high){
        if(!root) return true;
        return root.value > low 
        && root.value < high 
        && this.is_valid(root.leftChild, low, root.value) 
        && this.is_valid(root.rightChild, root.value, high);
    }
}

const tree1 = new BinaryTreeNode(1,
                    new BinaryTreeNode(4, 
                        new BinaryTreeNode(3,null),
                        new BinaryTreeNode(2, null)),
                    new BinaryTreeNode(5, 
                        new BinaryTreeNode(4,null),
                        new BinaryTreeNode(1, null)));

const tree2 = new BinaryTreeNode(5,
                    new BinaryTreeNode(3, 
                        new BinaryTreeNode(2,null),
                        new BinaryTreeNode(4, null)),
                    new BinaryTreeNode(7, 
                        new BinaryTreeNode(6,null),
                        new BinaryTreeNode(10, null)));

const tree3 = new BinaryTreeNode(0);
console.log(new Solution().is_valid(tree1,  Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY))
console.log(new Solution().is_valid(tree2,  Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY))
console.log(new Solution().is_valid(tree3, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY))