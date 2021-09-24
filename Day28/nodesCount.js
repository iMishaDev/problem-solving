/**
 * Given the root to a binary tree, count the total number of nodes there are.
 * Given the root to a binary tree, return the deepest node.
 */
import { BinaryTreeNode } from '../helpers.js';


class Solution {
    count(root){
            if(!root)
                return 0;
        return 1 + this.count(root.leftChild) + this.count(root.rightChild);
    }

    

}
const root = new BinaryTreeNode(10,
                    new BinaryTreeNode(5, new BinaryTreeNode(6,null)),
                    new BinaryTreeNode(20, new BinaryTreeNode(18,null),new BinaryTreeNode(24, null)));

const root2 = new BinaryTreeNode(10,
                    null,
                    new BinaryTreeNode(20, new BinaryTreeNode(18),new BinaryTreeNode(24, new BinaryTreeNode(7,null))));

const root3 = new BinaryTreeNode(10,
                    new BinaryTreeNode(5, new BinaryTreeNode(6,new BinaryTreeNode(7,null))))


console.log(new Solution().count(root))


