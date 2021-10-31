/**
 * Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes
 along the longest path from the root node down to the farthest leaf node.
 */

import { BinaryTreeNode } from "../helpers.js";

class Solution {
    max_depth(node){
        return this.max_depth_helper(node)[1]
    }

    max_depth_helper(node){
        if(!node)
            return [node, 0];

        let [, left_depth] = this.max_depth_helper(node.leftChild);
        let [, right_depth] = this.max_depth_helper(node.rightChild);

        return [node, Math.max(left_depth, right_depth) + 1];
    }
}

const tree1 = new BinaryTreeNode(1,
                    new BinaryTreeNode(4, 
                        new BinaryTreeNode(3,null),
                        new BinaryTreeNode(2, null)),
                    new BinaryTreeNode(5, 
                        new BinaryTreeNode(4,null),
                        new BinaryTreeNode(1, null)));
console.log(new Solution().max_depth(tree1))