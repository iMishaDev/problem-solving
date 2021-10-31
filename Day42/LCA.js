/**
 * Given a binary search tree (BST), 
 * find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: 
“The lowest common ancestor is defined between two nodes p and q as 
the lowest node in T that has both p and q as descendants 
(where we allow a node to be a descendant of itself).”

 


 */

import { BinaryTreeNode } from "../helpers.js";

class Solution {
    get_lowest(node, p1, p2){
        if(p1 > node.value && p2 > node.value)
            return this.get_lowest(node.rightChild, p1, p2)
        else if (p1 < node.value && p2 < node.value)
            return this.get_lowest(node.leftChild, p1, p2)
        else return node.value
    }
}


const tree1 = new BinaryTreeNode(6,
                    new BinaryTreeNode(2, 
                        new BinaryTreeNode(0,null),
                        new BinaryTreeNode(4, null)),
                    new BinaryTreeNode(8, 
                        new BinaryTreeNode(7,null),
                        new BinaryTreeNode(9, null)));
console.log(new Solution().get_lowest(tree1, 2, 8))