/**
 * A path in a binary tree is a sequence of nodes where each pair of adjacent
 *  nodes in the sequence has an edge connecting them. A node can only appear in
 *  the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any path.


 */

import { BinaryTreeNode } from "../helpers.js";


class Solution {
    max_path_sum(node){
        let res = [node.value]
        this.max_path_sum_helper(node, res);
        return res[0]
    }


    max_path_sum_helper(node, res){
        if(!node)
            return 0;

        let left = this.max_path_sum_helper(node.leftChild, res);
        let right = this.max_path_sum_helper(node.rightChild, res);

        left = Math.max(left, 0);
        right = Math.max(right, 0);
        res[0] = Math.max(res[0], node.value + left + right)

        return node.value + Math.max( left , right)
    }
}

const tree3 = new BinaryTreeNode(1,
                        new BinaryTreeNode(2,null));

console.log(new Solution().max_path_sum(tree3))