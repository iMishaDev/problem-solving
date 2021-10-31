/**
 * Given the roots of two binary trees p and q,
 *  write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical,
and the nodes have the same value.


 */

import { BinaryTreeNode } from "../helpers.js";

class Solution {
    are_identical(t1, t2){
        return this.are_identical_helper(t1, t2);
    }


    are_identical_helper(t1, t2){
        if(!t1 && !t2)
            return true;
        if(!t1 || !t2)
            return false;
        return t1.value == t2.value && this.are_identical_helper(t1.rightChild, t2.rightChild) && this.are_identical_helper(t1.leftChild, t2.leftChild)
    }
}

const tree1 = new BinaryTreeNode(1,
                    new BinaryTreeNode(4, 
                        new BinaryTreeNode(3,null),
                        new BinaryTreeNode(2, null)),
                    new BinaryTreeNode(5, 
                        new BinaryTreeNode(4,null),
                        new BinaryTreeNode(1, null)));

const tree2 = new BinaryTreeNode(1,
                    new BinaryTreeNode(4, 
                        new BinaryTreeNode(3,null),
                        new BinaryTreeNode(2, null)),
                    new BinaryTreeNode(5, 
                        new BinaryTreeNode(4,null),
                        new BinaryTreeNode(1, null)));

const tree3 = new BinaryTreeNode(1,
                    new BinaryTreeNode(4, 
                        new BinaryTreeNode(3,null),
                        new BinaryTreeNode(2, null)),
                    new BinaryTreeNode(5));
console.log(new Solution().are_identical(tree1, tree2))
console.log(new Solution().are_identical(tree2, tree3))