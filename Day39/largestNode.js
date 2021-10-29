/**
 * Given the root to a binary search tree, find the second largest node in the tree.
 */
import { BinaryTreeNode }  from '../helpers.js';

class Solution {
    find_second_largest(node){
        return find_second_largest_helper(node);
    }

    find_second_largest(node){
        if(node.rightChild.rightChild){
            return this.find_second_largest(node.rightChild)
        } else return node;
    }
}

const validBinaryTree = new BinaryTreeNode(10,
                    new BinaryTreeNode(5, new BinaryTreeNode(4,null), new BinaryTreeNode(8, null)),
                    new BinaryTreeNode(20, new BinaryTreeNode(18,null),new BinaryTreeNode(24, null)));
console.log(new Solution().find_second_largest(validBinaryTree))
