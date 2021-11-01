/**
 * Given the root of a binary search tree, 
 * and an integer k, 
 * return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 */

import { BinaryTreeNode } from "../helpers.js";

class Solution {
    get_kth_smallest(root, k){
        let stack = [];
        let current = root
    
        while( stack){
            while(current){
                stack.push(current)
                current = current.leftChild;
            }
            current = stack.pop();


            k -= 1

            if(!k){
                return current.value;
            }

            current = current.rightChild
        }
    }
}
const tree1 = new BinaryTreeNode(5,
                    new BinaryTreeNode(3, 
                        new BinaryTreeNode(2,null),
                        new BinaryTreeNode(4, null)),
                    new BinaryTreeNode(7, 
                        new BinaryTreeNode(6,null),
                        new BinaryTreeNode(10, null)));

console.log(new Solution().get_kth_smallest(tree1, 2))