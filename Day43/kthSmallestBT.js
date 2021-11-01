/**
 * Given the root of a binary search tree, 
 * and an integer k, 
 * return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 */

import { BinaryTreeNode } from "../helpers.js";

class Solution {
    get_kth_smallest(root, k){
        let stack = [root];
        while(stack.length){
            let current = stack.pop();
            while(current.leftChild){
                current = current.leftChild;
                stack.push(current)
            }

            current = stack.pop();

            k -= 1

            if(!k){
                return current;
            }

            current = current.rightChild
        }
    }
}
const tree1 = new BinaryTreeNode(1,
                    new BinaryTreeNode(4, 
                        new BinaryTreeNode(3,null),
                        new BinaryTreeNode(2, null)),
                    new BinaryTreeNode(5, 
                        new BinaryTreeNode(4,null),
                        new BinaryTreeNode(1, null)));
console.log(new Solution().get_kth_smallest(tree1, 2))