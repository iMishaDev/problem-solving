/**
 * Given the roots of two binary trees root and subRoot, 
 * return true if there is a subtree of root with the same structure and 
 * node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node
 in tree and all of this node's descendants. 
 The tree tree could also be considered as a subtree of itself.


 */

import { BinaryTreeNode } from "../helpers.js";

class Solution {
    is_subtree(tree, sub){

        if (!tree && !sub)
            return true;

        if (!tree || !sub)
            return false;
        if(tree.value === sub.value)
            return this.is_subtree(tree.leftChild, sub.leftChild) &&  this.is_subtree(tree.rightChild, sub.rightChild)
        
        return  this.is_subtree(tree.leftChild, sub) ||  this.is_subtree(tree.rightChild, sub)
    }
}



const tree1 = new BinaryTreeNode(1,
                    new BinaryTreeNode(4, 
                        new BinaryTreeNode(3,null),
                        new BinaryTreeNode(2, null)),
                    new BinaryTreeNode(5, 
                        new BinaryTreeNode(4,null),
                        new BinaryTreeNode(1, null)));


const tree2 =  new BinaryTreeNode(5, 
                        new BinaryTreeNode(4,null),
                        new BinaryTreeNode(1, null));

const tree3 =  new BinaryTreeNode(9, 
                        new BinaryTreeNode(4,null),
                        new BinaryTreeNode(1, null));


console.log(new Solution().is_subtree(tree1, tree2))
console.log(new Solution().is_subtree(tree1, tree3))