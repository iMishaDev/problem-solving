import { TreeNode } from './helpers.js'

class Solution {
    static depthOfBT(root){
        return this.#depthOfBTHelper(root, 0);
    }

    static #depthOfBTHelper(root, step){
        if(!root)
            return step;
        step++;
        return Math.max(this.#depthOfBTHelper(root.leftChild, step), this.#depthOfBTHelper(root.rightChild, step))
    }
}



const validBinaryTree = new TreeNode(10,
                    new TreeNode(5, new TreeNode(4,null), new TreeNode(8, null)),
                    new TreeNode(20, new TreeNode(18,null),new TreeNode(24, new TreeNode(22, null))));

console.log('Depth of BT', Solution.depthOfBT(validBinaryTree))