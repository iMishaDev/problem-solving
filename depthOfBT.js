import { BinaryTreeNode } from './helpers.js'

class Solution {
    static depthOfBT(root){
        return this.#depthOfBTHelper(root, 0);
    }

    static #depthOfBTHelper(root, step){
        if(!root)
            return step;
        return Math.max(this.#depthOfBTHelper(root.leftChild, step +1), this.#depthOfBTHelper(root.rightChild, step +1))
    }
}



const validBinaryTree = new BinaryTreeNode(10,
                    new BinaryTreeNode(5, new BinaryTreeNode(4,null), new BinaryTreeNode(8, null)),
                    new BinaryTreeNode(20, new BinaryTreeNode(18,null),new BinaryTreeNode(24, new BinaryTreeNode(22, null))));

console.log('Depth of BT', Solution.depthOfBT(validBinaryTree))